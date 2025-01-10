"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FaqSection1() {
  return (
    <section 
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col text-center gap-5">
          {/* Category Tag */}
          <p className="text-sm md:text-base text-muted-foreground font-semibold">
            FAQ
          </p>
          {/* Main Title */}
          <h1 
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Häufig gestellte Fragen
          </h1>
          {/* Section Description */}
          <p className="text-muted-foreground">
            Wir haben die wichtigsten Informationen zusammengestellt. 
            Kannst Du nicht finden, wonach Du suchst?{" "}
            <Link href="#" className="text-primary underline">
              Kontaktiere uns.
            </Link>
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion 
          type="single" 
          defaultValue="item-1"
          aria-label="FAQ items"
        >
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-medium text-left">
              Warum sollte ich Talkpilot nutzen, wenn ich bereits ein CRM habe?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Talkpilot ergänzt Dein bestehendes CRM perfekt. Während herkömmliche CRMs Daten nur speichern, bringt Talkpilot Deine Daten direkt ins Gespräch und automatisiert Aktionen in Echtzeit. So sparst Du Zeit und schließt schneller ab.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-medium text-left">
              Ist die Software nicht zu kompliziert für mein Team?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Ganz im Gegenteil! Mit dem intuitiven Drag-and-Drop-Editor und den visuellen Leitfäden ist Talkpilot kinderleicht zu bedienen. Wir bieten außerdem eine einfache Einführung, damit Dein Team direkt loslegen kann.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-medium text-left">
              Benötigen wir wirklich Automatisierungen während des Gesprächs?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Ja! Echtzeit-Automatisierungen sparen Dir wertvolle Zeit. Ob CRM-Statusänderungen, Onboarding-Start oder Follow-Ups – alles passiert auf Knopfdruck. So kannst Du Dich voll und ganz auf den Kunden konzentrieren.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-medium text-left">
              Kann ich mit Talkpilot meine Abschlussquote oder mein Team verbessern?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Definitiv! Talkpilot sorgt dafür, dass Dein Team strukturierter und effizienter arbeitet. Mit visuellen Leitfäden, Echtzeit-Automatisierungen und bald KI-gestützter Einwandbehandlung hebt Talkpilot Deine Abschlussquote und Teamleistung auf ein neues Level.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base font-medium text-left">
              Unsere Prozesse sind einzigartig – passt Talkpilot zu uns?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Absolut! Talkpilot ist vollständig anpassbar. Mit dem Drag-and-Drop-Editor erstellst Du individuelle Leitfäden, die genau auf Deine Prozesse zugeschnitten sind. Keine Kompromisse, nur Ergebnisse.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-base font-medium text-left">
              Wie sicher ist meine Datenverwaltung mit Talkpilot?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Datensicherheit hat bei uns höchste Priorität. Talkpilot arbeitet mit den modernsten Verschlüsselungstechnologien und erfüllt alle Datenschutzstandards, damit Deine Daten jederzeit geschützt sind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Card */}
        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">
              Noch Fragen?
            </h2>
            <p className="text-base text-muted-foreground">
              Hast du Fragen oder benötigst Unterstützung? Unser Team ist für Dich da!
            </p>
          </div>
          <Button aria-label="Contact our support team">
            Kontaktiere uns
          </Button>
        </div>
      </div>
    </section>
  );
}
