"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Sparkles, MapPin, ArrowRight, Calendar, Users, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Particle {
  left: string
  top: string
  duration: number
  delay: number
}

function createParticles(): Particle[] {
  return Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }))
}

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(createParticles())
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.svg"
          alt="Time travel vortex"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">
              Technologie Temporelle Certifiée
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Voyagez à Travers</span>
            <br />
            <span className="gradient-text">le Temps</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            De l&apos;Égypte des Pharaons aux métropoles du futur, 
            découvrez des destinations uniques à travers les époques.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              asChild
            >
              <Link href="#destinations">
                <span className="relative z-10 flex items-center gap-2">
                  Explorer les Destinations
                  <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8 py-6 text-lg"
              asChild
            >
              <Link href="#chatbot">
                <Clock className="w-5 h-5 mr-2" />
                Consulter notre Agent IA
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Calendar, value: "10K+", label: "Années Accessibles" },
            { icon: Users, value: "50K+", label: "Voyageurs Satisfaits" },
            { icon: MapPin, value: "150+", label: "Destinations" },
            { icon: Shield, value: "100%", label: "Retour Garanti" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
