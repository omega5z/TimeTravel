"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send, User, Sparkles, X, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: number
  role: "user" | "assistant"
  content: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Bonjour ! Je suis Chronos, votre assistant de voyage temporel. Comment puis-je vous aider à planifier votre prochaine aventure à travers le temps ?",
  },
]

const quickReplies = [
  "Quelle est la meilleure époque pour un premier voyage ?",
  "Quels sont les risques du voyage temporel ?",
  "Comment fonctionne le transfert temporel ?",
  "Puis-je rencontrer des personnages historiques ?",
]

const faqResponses: Record<string, string> = {
  "meilleure époque": "Pour un premier voyage, je recommande la Renaissance Italienne ! C'est une époque fascinante avec une culture riche, et les conditions de vie y sont relativement confortables. De plus, notre équipe a de nombreux contacts sur place pour assurer votre sécurité.",
  "risques": "La sécurité est notre priorité absolue ! Chaque voyageur est équipé d'un bouclier anti-paradoxe et d'un dispositif de retour d'urgence. Notre taux de réussite est de 99,99%. Les rares incidents sont généralement liés à des voyageurs qui tentent de modifier l'histoire, ce qui est strictement interdit.",
  "transfert": "Le transfert temporel utilise notre technologie propriétaire de manipulation quantique. Vous entrez dans notre capsule de voyage, et en quelques secondes, vous êtes transporté à l'époque choisie. Le processus est indolore et vous ressentirez simplement un léger picotement.",
  "personnages historiques": "Oui, c'est possible ! Cependant, toute interaction est strictement encadrée. Vous pouvez observer et même participer à des événements, mais modifier le cours de l'histoire est interdit. Nos guides sont là pour vous assurer une expérience immersive tout en préservant la continuité temporelle.",
  "default": "C'est une excellente question ! Pour vous donner la meilleure réponse, je vous invite à prendre rendez-vous avec l'un de nos conseillers en voyage temporel. Ils pourront vous fournir toutes les informations détaillées. Souhaitez-vous que je vous aide à planifier une consultation ?",
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("meilleure") || lowerMessage.includes("premier")) {
    return faqResponses["meilleure époque"]
  }
  if (lowerMessage.includes("risque") || lowerMessage.includes("danger") || lowerMessage.includes("sécurité")) {
    return faqResponses["risques"]
  }
  if (lowerMessage.includes("transfert") || lowerMessage.includes("fonctionne") || lowerMessage.includes("comment")) {
    return faqResponses["transfert"]
  }
  if (lowerMessage.includes("personnage") || lowerMessage.includes("rencontrer") || lowerMessage.includes("historique")) {
    return faqResponses["personnages historiques"]
  }
  
  return faqResponses["default"]
}

export function ChatbotSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (message?: string) => {
    const text = message || input
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(text)
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: response,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <section id="chatbot" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Assistant IA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Rencontrez{" "}
            <span className="gradient-text">Chronos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Notre agent conversationnel est disponible 24/7 pour répondre à vos questions 
            et vous aider à planifier votre voyage temporel idéal.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <div className="rounded-2xl glass overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chronos</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  En ligne
                </p>
              </div>
              <div className="ml-auto">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === "user" ? "bg-accent/20" : "bg-primary/20"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-accent" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-accent/20 text-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-secondary border-border focus:border-primary"
                />
                <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <Image
              src="/images/chatbot-illustration.svg"
              alt="Illustration chatbot Chronos"
              width={520}
              height={520}
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </div>

      {/* Floating Chat Button (for mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
