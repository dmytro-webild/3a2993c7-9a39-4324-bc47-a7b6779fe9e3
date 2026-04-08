"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { DollarSign, Globe, LineChart, ShieldCheck, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Start", id: "hero" },
        { name: "Preise", id: "pricing" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="TradeInt"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Die Finanzmärkte beherrschen"
      description="Exklusive Trading-Kurse für ambitionierte Marktteilnehmer. Erhalten Sie professionelles Wissen, um an den globalen Märkten nachhaltig erfolgreich zu sein."
      buttons={[
        { text: "Jetzt beraten lassen", href: "#contact" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/uploaded-1775636193653-s38aq5cu.jpg"
      mediaAnimation="slide-up"
      marqueeItems={[
        { type: "text-icon", text: "DAX Performance", icon: TrendingUp },
        { type: "text-icon", text: "Forex Strategie", icon: Globe },
        { type: "text-icon", text: "Kryptowährung", icon: DollarSign },
        { type: "text-icon", text: "Risikomanagement", icon: ShieldCheck },
        { type: "text-icon", text: "Marktanalyse", icon: LineChart },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Ihr Vorsprung am Markt"
      description="Unsere Trading-Akademie verbindet jahrelange Marktexpertise mit modernster Lehrmethodik. Wir fokussieren uns auf diszipliniertes Risikomanagement und datengestützte Handelsstrategien."
      metrics={[
        { value: "6+", title: "Jahre Erfahrung" },
        { value: "95%", title: "Zufriedenheitsrate" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-professional-trader-analyzing-complex--1775633565686-a9b643c0.png?_wi=1"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
    <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Unsere Expertise"
      description="Lernen Sie von erfahrenen Tradern, die ihre Leidenschaft zum Beruf gemacht haben."
      team={[
        {
          id: "t1",          name: "Jamy-Lee",          role: "Trader",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/uploaded-1775635413519-j2stas5l.jpg"
        }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split-actions"
      useInvertedBackground={false}
      plans={[
        { id: "basis", badge: "Essential", price: "€ 421", subtitle: "Der ideale Einstieg", buttons: [{ text: "Anmelden", href: "#contact" }], features: ["12 Monate Zugriff", "Video-Bibliothek", "Basis-Strategien"] },
        { id: "pro", badge: "Bestseller", price: "€ 1.055", subtitle: "Für ernsthafte Trader", buttons: [{ text: "Anmelden", href: "#contact" }], features: ["Lifetime-Zugriff", "Wöchentliches Live-Trading", "1:1 Coaching", "Exklusive Community"] },
      ]}
      title="Investieren Sie in Ihre Zukunft"
      description="Wählen Sie den passenden Plan für Ihren Erfolg."
      className="bg-[url('https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/uploaded-1775635670037-goy5ev6n.jpg')] bg-cover bg-center"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Bereit für den nächsten Schritt?"
      description="Kontaktieren Sie uns für ein unverbindliches Erstgespräch oder um mehr über unsere Kurse zu erfahren."
      inputs={[
        { name: "name", type: "text", placeholder: "Ihr Name", required: true },
        { name: "email", type: "email", placeholder: "Ihre E-Mail", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Wie können wir Ihnen helfen?", rows: 4, required: true }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/uploaded-1775635670037-wjgto5cu.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TradeInt"
      columns={[
        { title: "Rechtliches", items: [{ label: "Datenschutz", href: "#" }, { label: "Impressum", href: "#" }] },
      ]}
      copyrightText="© 2024 TradeInt. Alle Rechte vorbehalten."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}