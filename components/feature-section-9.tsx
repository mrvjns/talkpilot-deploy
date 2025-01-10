"use client";

import { SquareMousePointer, RefreshCw, SquareUserRound, BotMessageSquare } from "lucide-react";

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">
            Funktionen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mehr Abschlüsse, weniger Aufwand
          </h2>
          <p className="text-base text-muted-foreground">
            Mit unserer All-in-One-Software machst Du Deinen Direktvertrieb unschlagbar: Verkaufsleitfäden werden interaktiv, Gespräche effektiver, und Abschlüsse kommen schneller. 

          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <SquareMousePointer className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                Visuelle Leitfäden
              </h3>
              <p className="text-muted-foreground">
                Vergiss unübersichtliche PDFs. Mit visuellen Leitfäden hast Du in jedem Gespräch die perfekte Orientierung – Schritt für Schritt zum Abschluss.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                Echtzeit-Automatisierung
              </h3>
              <p className="text-muted-foreground">
                Automatisiere direkt aus dem Gespräch heraus: Ändere CRM-Status, starte Workflows oder löse Aktionen aus.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <SquareUserRound className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                CRM-Board
              </h3>
              <p className="text-muted-foreground">
                Alles, was Du brauchst, an einem Ort: Mit unserem integrierten CRM-Board hast Du Leads, Deals und Fortschritte jederzeit im Blick.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <BotMessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                KI-Unterstützung
              </h3>
              <p className="text-muted-foreground">
                Bereit für das nächste Level? Unsere KI wird Dir bald in Echtzeit die besten Antworten auf Einwände liefern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
