"use client";

import { X, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Banner1() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside 
      role="banner"
      aria-label="Promotion announcement"
      className="flex items-center bg-blue-500 px-6 py-3 relative"
    >
      <Link
        href="#"
        className="flex items-start md:items-center md:justify-center justify-start gap-2 w-full cursor-pointer"
        aria-label="Learn more about shadcn/ui kit Pro blocks"
      >
        <p className="text-sm text-white md:text-center text-left hover:underline">
          <span className="font-semibold">Neues Update</span> · Demo-Version in der Entwicklung
        </p>
        <ChevronsRight className="hidden md:block w-4 h-4 text-white" />
      </Link>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10"
        aria-label="Close announcement"
      >
        <X className="size-4 text-white" />
        <span className="sr-only">Close</span>
      </button>
    </aside>
  );
}
