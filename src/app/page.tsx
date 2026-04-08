"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
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
        { name: "Kurse", id: "features" },
        { name: "Erfolge", id: "testimonials" },
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
        { text: "Kursübersicht", href: "#features" },
        { text: "Jetzt beraten lassen", href: "#contact" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-highly-sophisticated-professional-trad-1775633567347-92dae4ab.png?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/economy-expert-reviewing-financial-data-kpi-dashboards_482257-127132.jpg", alt: "Marc L." },
        { src: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg", alt: "Sabine H." },
        { src: "http://img.b2bpic.net/free-photo/business-man-cute-brunette-man-dark-blue-suit-standing-confused_140725-161882.jpg", alt: "Thomas B." },
        { src: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg", alt: "Julia M." },
        { src: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg", alt: "Viktor R." },
      ]}
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

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Marktpsychologie", description: "Lernen Sie, wie Emotionen Ihr Trading beeinflussen und wie Sie mentale Stärke gewinnen.", tag: "Grundlagen", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-highly-sophisticated-professional-trad-1775633567347-92dae4ab.png?_wi=2" },
        { id: "f2", title: "Technische Analyse", description: "Beherrschen Sie Chartmuster, Indikatoren und Preis-Action für präzise Ein- und Ausstiege.", tag: "Fortgeschrittene", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-professional-trader-analyzing-complex--1775633565686-a9b643c0.png?_wi=2" },
        { id: "f3", title: "Risikomanagement", description: "Schützen Sie Ihr Kapital mit erprobten Strategien und disziplinierter Positionsgrößenbestimmung.", tag: "Professional", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-minimalist-dark-themed-office-receptio-1775633566969-c31e45ac.png?_wi=1" },
      ]}
      title="Unsere Kurse"
      description="Vom Einstieg zum Profi: Unsere modularen Trading-Kurse bieten alles, was Sie für eine erfolgreiche Handelskarriere benötigen."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Marc L.", date: "12.05.2023", title: "Trader", quote: "Die Ausbildung hat mein Verständnis für den Markt komplett verändert. Endlich handle ich profitabel.", tag: "Profi", avatarSrc: "http://img.b2bpic.net/free-photo/economy-expert-reviewing-financial-data-kpi-dashboards_482257-127132.jpg" },
        { id: "2", name: "Sabine H.", date: "04.08.2023", title: "Marktteilnehmerin", quote: "Strukturierte Inhalte und echte Live-Trading-Einblicke. Sehr wertvoll für meine Entwicklung.", tag: "Basis", avatarSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg" },
        { id: "3", name: "Thomas B.", date: "20.10.2023", title: "Unternehmer", quote: "Hohe Qualität, absolut professionell. Der Fokus auf Risikomanagement rettet mein Konto jeden Tag.", tag: "Masterclass", avatarSrc: "http://img.b2bpic.net/free-photo/business-man-cute-brunette-man-dark-blue-suit-standing-confused_140725-161882.jpg" },
      ]}
      title="Was unsere Teilnehmer sagen"
      description="Erfahrungsberichte unserer Kursteilnehmer auf dem Weg zum profitablen Handeln."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basis", badge: "Essential", price: "<span style='text-decoration: line-through; font-size: 0.8em; opacity: 0.6;'>€ 649</span> € 421", subtitle: "Der ideale Einstieg (-35% Rabatt)", buttons: [{ text: "Anmelden", href: "#contact" }], features: ["12 Monate Zugriff", "Video-Bibliothek", "Basis-Strategien"] },
        { id: "pro", badge: "Bestseller", price: "<span style='text-decoration: line-through; font-size: 0.8em; opacity: 0.6;'>€ 1.624</span> € 1.055", subtitle: "Für ernsthafte Trader (-35% Rabatt)", buttons: [{ text: "Anmelden", href: "#contact" }], features: ["Lifetime-Zugriff", "Wöchentliches Live-Trading", "1:1 Coaching", "Exklusive Community"] },
      ]}
      title="Investieren Sie in Ihre Zukunft"
      description="Limitierte Rabattaktion: Sichern Sie sich jetzt 35% Rabatt auf unsere Kurspakete."
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-minimalist-dark-themed-office-receptio-1775633566969-c31e45ac.png?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TradeInt"
      columns={[
        { title: "Akademie", items: [{ label: "Kurse", href: "#features" }, { label: "Erfolge", href: "#testimonials" }] },
        { title: "Rechtliches", items: [{ label: "Datenschutz", href: "#" }, { label: "Impressum", href: "#" }] },
      ]}
      copyrightText="© 2024 TradeInt. Alle Rechte vorbehalten."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
