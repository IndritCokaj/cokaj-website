"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png"; // your transparent logo

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("⏳ Wird gesendet...");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("✅ Erfolgreich gesendet!");
      e.target.reset();
    } else {
      setStatus("❌ Fehler beim Senden");
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Willkommen bei</h1>
        <Image
          src={Logo}
          alt="COKAJ Logo"
          width={320}
          height={320}
          className="mb-8"
        />
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Professionelle Reinigung & Hausservices in Deutschland.  
          Qualität, Zuverlässigkeit und Perfektion – alles aus einer Hand.
        </p>
        <a
          href="#services"
          className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Unsere Services ansehen
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Unsere <span className="text-red-700">Dienstleistungen</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg hover:shadow-red-700/50 transition">
            <h3 className="text-2xl font-semibold mb-4">Reinigungsservice</h3>
            <p className="text-gray-300">
              Gründliche Reinigung für private Haushalte, Büros und Gewerberäume – zuverlässig und effizient.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg hover:shadow-red-700/50 transition">
            <h3 className="text-2xl font-semibold mb-4">Hausmeisterservice</h3>
            <p className="text-gray-300">
              Rundum-Betreuung für Ihre Immobilie: Reparaturen, Pflege und Instandhaltung.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg hover:shadow-red-700/50 transition">
            <h3 className="text-2xl font-semibold mb-4">Renovierung</h3>
            <p className="text-gray-300">
              Professionelle Renovierungs- und Restaurationsarbeiten, die Ihr Zuhause wieder glänzen lassen.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Über <span className="text-red-700">uns</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            COKAJ steht für Qualität, Zuverlässigkeit und Professionalität.  
            Unser engagiertes Team bietet umfassende Reinigungs- und
            Hausmeisterdienste, die speziell auf die Bedürfnisse unserer Kunden
            zugeschnitten sind. Ob private Haushalte, Büros oder Renovierungen –
            wir sind Ihr zuverlässiger Partner für alle Hausservices.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kontaktieren <span className="text-red-700">Sie uns</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Haben Sie Fragen oder möchten Sie einen Termin buchen?  
            Füllen Sie das Formular aus oder kontaktieren Sie uns direkt.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              className="p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ihre E-Mail"
              className="p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-700"
              required
            />
            <textarea
              name="message"
              placeholder="Ihre Nachricht"
              rows="5"
              className="p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-700"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Nachricht senden
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">{status}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} COKAJ. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
