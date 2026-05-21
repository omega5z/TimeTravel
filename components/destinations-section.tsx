"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, Star, ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    name: "Égypte Antique",
    era: "2500 av. J.-C.",
    image: "/images/egypt-ancient.svg",
    description: "Vivez l'âge d'or des Pharaons. Assistez à la construction des pyramides et découvrez les secrets des hiéroglyphes.",
    duration: "5-7 jours",
    rating: 4.9,
    highlights: ["Pyramides de Gizeh", "Vallée des Rois", "Temple de Karnak", "Navigation sur le Nil"],
    price: "À partir de 12,500 TC",
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: 2,
    name: "Renaissance Italienne",
    era: "1500 ap. J.-C.",
    image: "/images/renaissance-italy.svg",
    description: "Plongez dans l'effervescence artistique de Florence. Rencontrez les plus grands maîtres de l'époque.",
    duration: "4-6 jours",
    rating: 4.8,
    highlights: ["Atelier de Léonard", "Chapelle Sixtine", "Palazzo Vecchio", "Fêtes Médicéennes"],
    price: "À partir de 15,000 TC",
    color: "from-rose-500/20 to-amber-500/20",
  },
  {
    id: 3,
    name: "Métropole 2150",
    era: "2150 ap. J.-C.",
    image: "/images/future-city.svg",
    description: "Explorez les cités du futur. Découvrez les avancées technologiques et la vie extraterrestre intégrée.",
    duration: "3-5 jours",
    rating: 4.7,
    highlights: ["Tours Gravitationnelles", "Quartier Alien", "Transport Quantique", "Parcs Orbitaux"],
    price: "À partir de 18,000 TC",
    color: "from-cyan-500/20 to-blue-600/20",
  },
]

export function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null)

  return (
    <section id="destinations" className="py-24 relative">
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
            Nos Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Explorez{" "}
            <span className="gradient-text">Trois Époques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choisissez parmi nos destinations les plus populaires et préparez-vous 
            pour une aventure inoubliable à travers le temps.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div 
                className="relative h-125 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedDestination(destination)}
              >
                {/* Image */}
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-linear-to-t ${destination.color} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Era Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm w-fit mb-4">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="text-xs font-mono text-primary">{destination.era}</span>
                  </div>

                  {/* Title & Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{destination.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm text-foreground">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {destination.duration}
                    </div>
                    <Button 
                      size="sm" 
                      className="group/btn bg-primary/20 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-sm"
                    >
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-2xl glass overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full bg-primary/20">
                    <span className="text-xs font-mono text-primary">{selectedDestination.era}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm">{selectedDestination.rating}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-3">{selectedDestination.name}</h3>
                <p className="text-muted-foreground mb-6">{selectedDestination.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Points forts</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">Prix</div>
                    <div className="text-xl font-bold text-primary">{selectedDestination.price}</div>
                  </div>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <MapPin className="w-4 h-4 mr-2" />
                    Réserver Maintenant
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
