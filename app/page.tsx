import { HeroSection } from "@/components/hero-section"
import { AgencySection } from "@/components/agency-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ChatbotSection } from "@/components/chatbot-section"
import { BookingSection } from "@/components/booking-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AgencySection />
      <DestinationsSection />
      <ChatbotSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
