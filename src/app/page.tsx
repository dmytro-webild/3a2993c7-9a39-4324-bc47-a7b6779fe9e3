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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Kurse",
          id: "features",
        },
        {
          name: "Erfolge",
          id: "testimonials",
        },
        {
          name: "Preise",
          id: "pricing",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="TradeElite"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Mastering the Financial Markets"
      description="Exklusive Trading-Kurse für ambitionierte Investoren. Erhalten Sie professionelles Wissen, um an den globalen Märkten nachhaltig erfolgreich zu sein."
      buttons={[
        {
          text: "Kursübersicht",
          href: "#features",
        },
        {
          text: "Jetzt beraten lassen",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-highly-sophisticated-professional-trad-1775633567347-92dae4ab.png?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/economy-expert-reviewing-financial-data-kpi-dashboards_482257-127132.jpg",
          alt: "Marc L.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg",
          alt: "Sabine H.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-man-cute-brunette-man-dark-blue-suit-standing-confused_140725-161882.jpg",
          alt: "Thomas B.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg",
          alt: "Julia M.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",
          alt: "Viktor R.",
        },
      ]}
      avatarText="Mehr als 2.500 erfolgreiche Absolventen vertrauen uns."
      marqueeItems={[
        {
          type: "text-icon",
          text: "DAX Performance",
          icon: TrendingUp,
        },
        {
          type: "text-icon",
          text: "Forex Strategie",
          icon: Globe,
        },
        {
          type: "text-icon",
          text: "Kryptowährung",
          icon: DollarSign,
        },
        {
          type: "text-icon",
          text: "Risikomanagement",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Marktanalyse",
          icon: LineChart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Ihr Vorsprung am Markt"
      description="Unsere Trading-Akademie verbindet jahrelange Marktexpertise mit modernster Lehrmethodik. Wir fokussieren uns auf diszipliniertes Risikomanagement und datengestützte Handelsstrategien."
      metrics={[
        {
          value: "10+",
          title: "Jahre Expertise",
        },
        {
          value: "2500+",
          title: "Erfolgreiche Kursteilnehmer",
        },
        {
          value: "95%",
          title: "Zufriedenheitsrate",
        },
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
        {
          id: "f1",
          title: "Marktpsychologie",
          description: "Lernen Sie, wie Emotionen Ihr Trading beeinflussen und wie Sie mentale Stärke gewinnen.",
          tag: "Essentials",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-highly-sophisticated-professional-trad-1775633567347-92dae4ab.png?_wi=2",
        },
        {
          id: "f2",
          title: "Technische Analyse",
          description: "Beherrschen Sie Chartmuster, Indikatoren und Preis-Action für präzise Ein- und Ausstiege.",
          tag: "Advance",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-professional-trader-analyzing-complex--1775633565686-a9b643c0.png?_wi=2",
        },
        {
          id: "f3",
          title: "Risikomanagement",
          description: "Schützen Sie Ihr Kapital mit erprobten Strategien und disziplinierter Positionsgrößenbestimmung.",
          tag: "Professional",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-minimalist-dark-themed-office-receptio-1775633566969-c31e45ac.png?_wi=1",
        },
      ]}
      title="Unsere Kursangebote"
      description="Vom Anfänger zum Profi: Unsere modularen Trading-Kurse bieten alles, was Sie für eine professionelle Handelskarriere benötigen."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marc L.",
          date: "12.05.2023",
          title: "Full-Time Trader",
          quote: "Die Ausbildung hat mein Verständnis für den Markt komplett verändert. Endlich handle ich profitabel.",
          tag: "Profikurs",
          avatarSrc: "http://img.b2bpic.net/free-photo/economy-expert-reviewing-financial-data-kpi-dashboards_482257-127132.jpg",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-highly-sophisticated-professional-trad-1775633567347-92dae4ab.png?_wi=3",
          imageAlt: "A highly sophisticated professional trading workspace with sleek monitors, charts in gold and white ",
        },
        {
          id: "2",
          name: "Sabine H.",
          date: "04.08.2023",
          title: "Investorin",
          quote: "Strukturierte Inhalte und echte Live-Trading-Einblicke. Sehr wertvoll für meine Entwicklung.",
          tag: "Basis",
          avatarSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-professional-trader-analyzing-complex--1775633565686-a9b643c0.png?_wi=3",
          imageAlt: "A professional trader analyzing complex financial data on a large touchscreen. Dark atmosphere with ",
        },
        {
          id: "3",
          name: "Thomas B.",
          date: "20.10.2023",
          title: "Entrepreneur",
          quote: "Hohe Qualität, absolut professionell. Der Fokus auf Risikomanagement rettet mein Konto jeden Tag.",
          tag: "Masterclass",
          avatarSrc: "http://img.b2bpic.net/free-photo/business-man-cute-brunette-man-dark-blue-suit-standing-confused_140725-161882.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/economy-expert-reviewing-financial-data-kpi-dashboards_482257-127132.jpg",
          imageAlt: "professional portrait smiling man business suit studio",
        },
        {
          id: "4",
          name: "Julia M.",
          date: "15.11.2023",
          title: "Trading-Enthusiastin",
          quote: "Die Mentoren gehen individuell auf Fragen ein. Ein großer Mehrwert für mich.",
          tag: "Profikurs",
          avatarSrc: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3571.jpg",
          imageAlt: "confident businesswoman portrait professional dark office",
        },
        {
          id: "5",
          name: "Viktor R.",
          date: "05.12.2023",
          title: "Daytrader",
          quote: "Beste Investition meines Lebens. Danke an das gesamte TradeElite-Team!",
          tag: "Masterclass",
          avatarSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-cute-brunette-man-dark-blue-suit-standing-confused_140725-161882.jpg",
          imageAlt: "professional man portrait confident serious",
        },
      ]}
      title="Erfahrungen unserer Teilnehmer"
      description="Was unsere Absolventen über ihre Reise zum professionellen Trader sagen."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basis",
          badge: "Essential",
          price: "€ 999",
          subtitle: "Der ideale Einstieg",
          buttons: [
            {
              text: "Anmelden",
              href: "#contact",
            },
          ],
          features: [
            "12 Monate Zugriff",
            "Video-Bibliothek",
            "Basis-Strategien",
          ],
        },
        {
          id: "pro",
          badge: "Premium",
          price: "€ 2.499",
          subtitle: "Für ernsthafte Trader",
          buttons: [
            {
              text: "Anmelden",
              href: "#contact",
            },
          ],
          features: [
            "Lifetime-Zugriff",
            "Wöchentliches Live-Trading",
            "1:1 Coaching-Call",
            "Exklusive Community",
          ],
        },
      ]}
      title="Investieren Sie in Ihre Zukunft"
      description="Wählen Sie das Paket, das Ihren aktuellen Zielen entspricht."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Bereit für den nächsten Schritt?"
      description="Kontaktieren Sie uns für ein unverbindliches Erstgespräch oder um mehr über unsere Kurse zu erfahren."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Ihr Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Ihre E-Mail",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Wie können wir Ihnen helfen?",
        rows: 4,
        required: true,
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1g1g41A9mvtTwTAGz3WKojkuv/a-minimalist-dark-themed-office-receptio-1775633566969-c31e45ac.png?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TradeElite"
      columns={[
        {
          title: "Akademie",
          items: [
            {
              label: "Kurse",
              href: "#features",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Datenschutz",
              href: "#",
            },
            {
              label: "Impressum",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 TradeElite. Alle Rechte vorbehalten."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
