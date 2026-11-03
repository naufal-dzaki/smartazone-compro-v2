import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero.png"
            alt="Pendaki di puncak gunung saat sunrise"
            fill
            className="object-cover object-top" 
            priority
        />
        
        <div 
            className="absolute inset-0"
            style={{
            background: "linear-gradient(90deg, rgba(5, 16, 26, 0.9) 0%, rgba(8, 24, 37, 0.65) 48%, rgba(7, 18, 29, 0.15) 100%)"
            }}
        />
        </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-balance text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tetap Terhubung di Setiap{" "}
            <span className="text-[#ffa627]">Momen Berharga.</span>
          </h1>

          <p className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-gray-200 sm:text-lg sm:leading-relaxed">
            Menjelajah alam bebas kini tak lagi berarti hilang kabar. Hadirkan rasa aman bagi langkah Anda dan ketenangan bagi keluarga yang menunggu di rumah, bahkan di puncak gunung tanpa sinyal seluler.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#tarif">
              <Button
                size="lg"
                className="h-13 w-full rounded-full bg-[#ffa627] px-8 text-base font-bold text-white shadow-lg shadow-[#ffa627]/25 transition-all hover:bg-[#e08f1b] hover:shadow-xl sm:w-auto"
              >
                Sewa Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="#learn">
              <Button
                variant="outline"
                size="lg"
                className="h-13 w-full rounded-full border-white/40 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-[#ffa627] hover:bg-white/20 sm:w-auto"
              >
                Pelajari Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}