import Image from "next/image"
import { MapPin, ShieldAlert, HeartPulse, ArrowRight } from "lucide-react"

const safetyFeatures = [
  {
    icon: MapPin,
    title: "Pantau Langsung dari Rumah",
    description:
      "Keluarga cukup memasukkan ID Tiket di web untuk melihat posisi terakhir dan status perjalanan secara langsung tanpa perlu repot pasang aplikasi.",
    href: "#device",
  },
  {
    icon: ShieldAlert,
    title: "Tombol Bantuan Darurat (SOS)",
    description:
      "Jika terjadi kondisi kritis atau cedera di tengah jalur, tekan tombol darurat fisik untuk mengirim alarm bahaya langsung ke petugas pos basecamp.",
    href: "#device",
  },
  {
    icon: HeartPulse,
    title: "Deteksi Kesehatan Otomatis",
    description:
      "Smartwatch memantau detak jantung dan suhu tubuh otomatis, membantu mendeteksi kelelahan ekstrem dan gejala kedinginan (hipotermia) lebih dini.",
    href: "#device",
  },
]

export function SafetyCircleSection() {
  return (
    <section id="products" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-white1.png"
          alt="Latar belakang SmartAzone ekosistem"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/95" />
      </div>

      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bridge-line-extended" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-block text-xs font-extrabold tracking-widest text-[#ffa627]">
            SATU SISTEM. PERLINDUNGAN MENYELURUH.
          </div>
          <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Lingkar Perlindungan untuk Setiap Langkah{" "}
            <span className="text-[#ffa627]">Petualangan.</span>
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-gray-700">
            Kemanapun jalur membawa Anda melangkah, keluarga di rumah dan petugas penjaga layak tahu bahwa Anda baik-baik saja. Inilah ruang perlindungan SmartAzone—menghadirkan ketenangan dua arah.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-[14px] border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl"
            >
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#ffa627]/10 text-[#ffa627] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffa627] group-hover:text-white">
                  <feature.icon className="h-7 w-7 transition-transform duration-300" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={feature.href}
                  aria-label={`Pelajari lebih lanjut tentang ${feature.title}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ffa627] transition-colors group-hover:text-[#e08f1b]"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <div className="mt-4 h-1 w-12 rounded-full bg-[#ffa627]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#ffa627]" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}