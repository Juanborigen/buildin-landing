import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketplaceSection from "@/components/MarketplaceSection";
import FeaturesSection from "@/components/FeaturesSection";
import DeveloperSection from "@/components/DeveloperSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header isFixed={true} />
      <Hero />
      <MarketplaceSection />
      <FeaturesSection />
      <DeveloperSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
