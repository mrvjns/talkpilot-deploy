"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { EnhancedButton } from "./ui/enhanced-button";

const MENU_ITEMS = [
  { label: "Startseite", href: "#" },
  { label: "Funktionen", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col md:flex-row gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <EnhancedButton variant="link" effect="hoverUnderline" className="w-full md:w-auto">
          {label}
        </EnhancedButton>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-background py-3.5 md:py-4 isolate border-b border-bg-border">
      <div className="container relative px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 m-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="size-9 flex items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5 w-full justify-end">
          <NavMenuItems />
          <Link href="#">
            <Button>Demo anfordern</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-5 w-full justify-end pb-2.5">
            <NavMenuItems />
            <div className="flex justify-between items-center gap-5">
              <Link href="#" className="flex-grow">
          <Button className="w-full">Demo anfordern</Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
