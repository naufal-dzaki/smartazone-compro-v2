"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#learn", label: "Cara Kerja" },
  { href: "#products", label: "Fitur Keselamatan" },
  { href: "#device", label: "Perangkat" },
  { href: "#plans", label: "Tarif Sewa" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/75 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-md">
              <Image
                src="/images/logo.png"
                alt="SmartAzone Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Smart<span className="text-[#ffa627]">Azone</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "white" }}
                className="text-sm font-semibold tracking-wide text-white/85 transition-colors hover:text-[#ffa627]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#tarif">
                <Button className="rounded-full bg-[#ffa627] font-bold text-white hover:bg-[#e08f1b]">
                    Hubungi Kami
                </Button>
            </Link>
          </div>

          <button
            className="p-1 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "white" }}
                  className="text-base font-semibold text-white/90 transition-colors hover:text-[#ffa627]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="#tarif" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-[#ffa627] font-bold text-white hover:bg-[#e08f1b]">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}