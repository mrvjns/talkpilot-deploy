"use client";

import { ArrowRightIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { EnhancedButton } from "./ui/enhanced-button";

export function HeroSection4() {
  return (
    <section 
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Category Tag */}
            <p 
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Startseite
            </p>
            {/* Main Heading */}
            <h1 
              id="hero-heading"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Vom Gespräch direkt zum Abschluss{" "}
              <span className="text-primary">- Ohne Umwege</span>
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Mit unserer innovativen Vertriebssoftware nutzen Sie visuelle Leitfäden und verwandeln Gespräche in Echtzeit in erfolgreiche Abschlüsse. Automatisieren Sie Prozesse direkt während des Kundengesprächs und steigern Sie Ihre Abschlussquote. Machen Sie Ihr Team zum Champion im Vertrieb. 
            </p>
          </div>

          {/* Email Form */}
          <form 
            className="flex flex-col lg:flex-row gap-3 w-full md:max-w-sm"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Email signup form"
          >
            <Input 
              placeholder="Deine E-Mail-Adresse" 
              type="email"
              required
              aria-required="true"
            />
            <EnhancedButton 
              effect="expandIcon" 
              icon={ArrowRightIcon} 
              iconPlacement="right" 
              onClick={() => window.location.href = "/login"}
            >
              Demo anfordern
            </EnhancedButton>

          </form>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero section visual"
              fill
              priority
              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
