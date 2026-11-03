'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
} from 'lucide-react'
import { SafetyCircleSection } from '../components/SafetyCircleSection'
import { HeroSection } from '../components/HeroSection'
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  const [planType, setPlanType] = useState<'individual' | 'group'>('individual')

  return (
    <main className="min-h-screen bg-white text-[#253344]">

      <HeroSection />

      <section id="learn" className="split-section prep-section">
        <div className="section-copy texture">
          <div className="section-kicker">KESELAMATAN ANDA DI ALAM BEBAS</div>
          <h2>Petualangan Nyaman Dimulai dari Kesiapan. Bersama SmartAzone, Anda Tak Pernah Sendirian.</h2>
          <p>
            Saat melangkah jauh ke pedalaman gunung, tantangan alam adalah bagian dari cerita. Namun urusan keselamatan, Anda layak mendapatkan kepastian. SmartAzone hadir menemani perjalanan Anda dengan pelacakan lokasi akurat, tombol bantuan darurat, dan pemantauan kondisi fisik yang aktif otomatis.
          </p>
          <p>
            Cukup kenakan perangkat di pergelangan tangan dan ransel Anda. Tanpa perlu repot mencari sinyal HP, sistem kami langsung menghubungkan posisi Anda ke pos basecamp dan layar ponsel keluarga di rumah.
          </p>
          <a className="text-link" href="#products">
            Pelajari Fitur SmartAzone <ArrowRight />
          </a>
        </div>
        <div className="image-panel">
          <img
            src="/adventure.png"
            alt="Pendaki bersiap menjelajahi alam terbuka"
          />
        </div>
      </section>

      <SafetyCircleSection />

      <section id="device" className="peace-section">
        <div>
          <div className="section-kicker">KEAMANAN DALAM GENGGAMAN</div>
          <h2>Ketenangan Pikiran di Setiap Langkah</h2>
          <p>
            Kirim sinyal darurat dan pastikan keluarga tahu Anda aman berkat tombol SOS terdedikasi serta pemantauan otomatis, bahkan saat ponsel kehabisan baterai atau tanpa sinyal.
          </p>

          <div className="device-feature-image">
            <img
              src="/smartazone-device-pointers-desktop.webp"
              alt="Diagram fitur SmartAzone AzoNode versi desktop"
              className="device-img-desktop"
            />
            <img
              src="/smartazone-device-pointers-mobile.webp"
              alt="Diagram fitur SmartAzone AzoNode versi mobile"
              className="device-img-mobile"
            />
          </div>

          <small>
            *Perangkat disewa di pos registrasi basecamp dalam kondisi aktif dan otomatis terhubung ke sistem pemantauan pengawas.
          </small>
        </div>
      </section>

      <section id="plans" className="plans-section">
        <div className="center-heading">
          <div className="section-kicker">HEMAT & BEBAS KHAWATIR</div>
          <h2>Pilih Keamanan yang Pas untuk Pendakian Anda</h2>
          <p>
            Tanpa perlu membeli perangkat mahal. Nikmati perlindungan menyeluruh melalui sistem sewa praktis yang langsung aktif saat Anda memulai perjalanan dari basecamp.
          </p>
        </div>

        <div className="billing-toggle" role="group" aria-label="Pilihan Kategori">
          <button
            className={planType === 'individual' ? 'selected' : ''}
            onClick={() => setPlanType('individual')}
          >
            Pendaki Mandiri
          </button>
          <button
            className={planType === 'group' ? 'selected' : ''}
            onClick={() => setPlanType('group')}
          >
            Mitra & Komunitas <span>B2B / B2G</span>
          </button>
        </div>

        <div className="plan-grid">
          {planType === 'individual' ? (
            <>
              <article className="plan-card">
                <h3>Paket Standar</h3>
                <p>Perlindungan esensial untuk satu kali pendakian.</p>
                <div className="price">
                  <sup>Rp</sup>30.000<small>/trip</small>
                </div>
                <a className="button button-green full" href="#contact">
                  Sewa di Loket
                </a>
                <ul>
                  {[
                    '1x Unit Smartwatch Pemantau Tubuh',
                    '1x Modul SmartAzone',
                    'Tombol SOS Respon Cepat ke Pos',
                    'Fitur Pantau Live untuk Keluarga via ID Tiket'
                  ].map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="plan-card">
                <h3>Paket Regu (Grup 4 Orang)</h3>
                <p>Kenyamanan ekstra untuk kelompok atau keluarga pendaki.</p>
                <div className="price">
                  <sup>Rp</sup>100.000<small>/trip</small>
                </div>
                <a className="button button-green full" href="#contact">
                  Sewa Paket Regu
                </a>
                <ul>
                  {[
                    '4x Unit Smartwatch Pemantau Tubuh',
                    '2x Modul SmartAzone',
                    'Monitoring Kolektif Posisi Rombongan',
                    'Akses Pantau Bersama untuk Keluarga di Rumah'
                  ].map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </>
          ) : (
            <>
              <article className="plan-card">
                <h3>Mitra Open Trip & Rental</h3>
                <p>Tingkatkan nilai jual dan jaminan keamanan trip Anda.</p>
                <div className="price">
                  Bagi Hasil<small> / Sewa</small>
                </div>
                <a className="button button-green full" href="#contact">
                  Hubungi Kemitraan
                </a>
                <ul>
                  {[
                    'Konsinyasi Unit Tanpa Beli Putus (Zero CapEx)',
                    'Label Keamanan Khusus (Digital Safety Badge)',
                    'Integrasi Dashboard Manajemen Rombongan',
                    'Pelatihan SOP Penanganan Darurat'
                  ].map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="plan-card">
                <h3>Pengelola Jalur & Tahura</h3>
                <p>Digitalisasi tata kelola dan keselamatan seluruh kawasan.</p>
                <div className="price">
                  Turnkey<small> Solution</small>
                </div>
                <a className="button button-green full" href="#contact">
                  Jadwalkan Presentasi
                </a>
                <ul>
                  {[
                    'Pemasangan Gateway LoRa Basecamp',
                    'Dashboard Live Monitoring Multi-Admin',
                    'Sistem E-Ticketing & Check-In Mandiri',
                    'Bagi Hasil PAD / Pendapatan Kas Kawasan'
                  ].map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div>
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
          <p className='max-w-[264px]'>Standar baru keselamatan pendakian di Indonesia. Teknologi untuk petualangan yang lebih aman.</p>
        </div>
        <div className="footer-links">
          <a href="#learn">Cara Kerja</a>
          <a href="#products">Fitur</a>
          <a href="#plans">Tarif Sewa</a>
          <a href="#device">Perangkat</a>
        </div>
        <small>© 2026 SmartAzone. Semua hak dilindungi.</small>
      </footer>
    </main>
  )
}