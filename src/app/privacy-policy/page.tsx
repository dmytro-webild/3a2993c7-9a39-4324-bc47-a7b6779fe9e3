"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPolicyPage() {
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

        <div id="legal" data-section="legal">
            <LegalSection
                layout="page"
                title="Datenschutzerklärung"
                sections={[
                    { heading: "Einleitung", content: { type: "paragraph", text: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir Daten erheben und verarbeiten." } },
                    { heading: "Datenerhebung", content: { type: "paragraph", text: "Wir erheben personenbezogene Daten, wenn Sie mit uns in Kontakt treten oder unsere Dienstleistungen in Anspruch nehmen." } },
                    { heading: "Ihre Rechte", content: { type: "list", items: ["Recht auf Auskunft", "Recht auf Berichtigung", "Recht auf Löschung"] } }
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