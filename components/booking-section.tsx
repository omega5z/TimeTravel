"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, MapPin, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const destinations = [
  { id: "egypt", name: "Égypte Antique", era: "2500 av. J.-C." },
  { id: "renaissance", name: "Renaissance Italienne", era: "1500 ap. J.-C." },
  { id: "future", name: "Métropole 2150", era: "2150 ap. J.-C." },
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: 1,
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.destination) newErrors.destination = "Sélectionnez une destination"
    if (!formData.date) newErrors.date = "Sélectionnez une date"
    if (!formData.name.trim()) newErrors.name = "Entrez votre nom"
    if (!formData.email.trim()) newErrors.email = "Entrez votre email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center glass rounded-2xl p-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Réservation Confirmée !</h2>
            <p className="text-muted-foreground mb-6">
              Merci pour votre réservation. Un email de confirmation a été envoyé à{" "}
              <span className="text-primary">{formData.email}</span>. 
              Notre équipe vous contactera sous 24h pour finaliser les détails de votre voyage.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  destination: "",
                  date: "",
                  travelers: 1,
                  name: "",
                  email: "",
                })
              }}
              variant="outline"
            >
              Nouvelle Réservation
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Réservation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Planifiez Votre{" "}
            <span className="gradient-text">Voyage</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Remplissez le formulaire ci-dessous pour réserver votre aventure temporelle. 
            Notre équipe vous contactera pour confirmer les détails.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            {/* Destination */}
            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Destination
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, destination: dest.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.destination === dest.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold text-foreground">{dest.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{dest.era}</div>
                  </button>
                ))}
              </div>
              {errors.destination && (
                <p className="text-sm text-destructive">{errors.destination}</p>
              )}
            </div>

            {/* Date & Travelers */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date de Départ
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-secondary border-border"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && (
                  <p className="text-sm text-destructive">{errors.date}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Nombre de Voyageurs
                </Label>
                <Input
                  id="travelers"
                  type="number"
                  min={1}
                  max={10}
                  value={formData.travelers}
                  onChange={(e) =>
                    setFormData({ ...formData, travelers: parseInt(e.target.value) || 1 })
                  }
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nom Complet
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Validation en cours...
                </>
              ) : (
                "Confirmer la Réservation"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              En soumettant ce formulaire, vous acceptez nos conditions générales 
              et notre politique de protection temporelle.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
