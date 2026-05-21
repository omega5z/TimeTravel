"use client"

import { motion } from "framer-motion"
import { Clock, Compass, Shield, Sparkles, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Voyage Temporel Sécurisé",
    description: "Notre technologie brevetée garantit un voyage sûr à travers les époques avec retour garanti.",
  },
  {
    icon: Compass,
    title: "Guides Experts",
    description: "Des historiens et futurologues certifiés vous accompagnent dans chaque aventure.",
  },
  {
    icon: Shield,
    title: "Protection Temporelle",
    description: "Bouclier anti-paradoxe inclus pour préserver la continuité de l'espace-temps.",
  },
  {
    icon: Users,
    title: "Groupes Personnalisés",
    description: "Voyages individuels ou en groupe, adaptés à vos préférences et votre rythme.",
  },
  {
    icon: Zap,
    title: "Transfert Instantané",
    description: "Technologie de téléportation temporelle pour un voyage confortable et rapide.",
  },
  {
    icon: Sparkles,
    title: "Expériences Immersives",
    description: "Vivez l'histoire de l'intérieur avec nos programmes d'immersion culturelle.",
  },
]

export function AgencySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
            À Propos de Nous
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            L&apos;Agence du{" "}
            <span className="gradient-text">Voyage Temporel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Depuis 2087, TimeTravel Agency révolutionne le tourisme en offrant 
            des expériences uniques à travers les époques. Notre mission : 
            rendre l&apos;histoire accessible à tous.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl glass hover:bg-card/80 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
