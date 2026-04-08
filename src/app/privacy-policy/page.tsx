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
            subtitle="Wir nehmen den Schutz Ihrer Daten ernst."
            sections={[
                { 
                  heading: "1. Einleitung", 
                  content: { type: "paragraph", text: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website." } 
                },
                { 
                  heading: "2. Datenerfassung", 
                  content: { type: "paragraph", text: "Beim Besuch unserer Website werden verschiedene Daten erhoben, darunter technische Daten wie IP-Adresse, Browsertyp und Informationen zur Nutzung der Website, die zur Bereitstellung unserer Dienste erforderlich sind." } 
                },
                { 
                  heading: "3. Ihre Rechte", 
                  content: { type: "list", items: ["Recht auf Auskunft", "Recht auf Berichtigung", "Recht auf Löschung", "Recht auf Einschränkung der Verarbeitung", "Recht auf Datenübertragbarkeit"] } 
                }
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