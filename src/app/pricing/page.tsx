"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function PricingPage() {
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
              { name: "Start", id: "/" },
              { name: "Preise", id: "/pricing" },
              { name: "Kontakt", id: "/contact" },
              { name: "Datenschutz", id: "/privacy-policy" },
            ]}
            brandName="TradeInt"
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardThree
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Unsere Preispläne"
            description="Wählen Sie den Plan, der am besten zu Ihren Trading-Zielen passt."
            plans={[
              { id: "basis", badge: "Essential", price: "€ 421", name: "Basis", buttons: [{ text: "Jetzt wählen", href: "/contact" }], features: ["6 Monate Zugriff", "Basis-Strategien"] },
              { id: "pro", badge: "Premium", price: "€ 1.757", name: "Professional", buttons: [{ text: "Jetzt wählen", href: "/contact" }], features: ["Lifetime-Zugriff", "1:1 Coaching", "Live-Trading"] }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="TradeInt"
            columns={[
              { title: "Rechtliches", items: [{ label: "Datenschutz", href: "/privacy-policy" }, { label: "Impressum", href: "#" }] },
            ]}
            copyrightText="© 2024 TradeInt. Alle Rechte vorbehalten."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}