"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  destinations: [
    { label: "Égypte Antique", href: "#destinations" },
    { label: "Renaissance Italienne", href: "#destinations" },
    { label: "Métropole 2150", href: "#destinations" },
  ],
  company: [
    { label: "À Propos", href: "#" },
    { label: "Notre Équipe", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#chatbot" },
    { label: "Contact", href: "#booking" },
    { label: "Conditions", href: "#" },
    { label: "Confidentialité", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Time<span className="text-primary">Travel</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Votre passeport vers l&apos;extraordinaire. Depuis 2087, nous rendons 
              le voyage temporel accessible à tous.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>42 Avenue du Temps, Paris 2087</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@timetravel.agency</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Destinations</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2087 TimeTravel Agency. Tous droits réservés à travers le temps.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground font-mono">
              Licence Temporelle N°TT-2087-42
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
