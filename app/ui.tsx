import Image from "next/image";
import Link from "next/link";
import { site } from "./site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Winner Behring Spain"
      style={{ display: "block", width: 210 }}
    >
      <Image
        src="/images/winner-logo.png"
        alt="Winner Behring Brazilian Jiu-Jitsu"
        width={420}
        height={86}
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  );
}
export function Header() {
  return (
    <header
      style={{
        background: "#000",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderBottom: "1px solid rgba(255,255,255,.12)",
      }}
    >
      <div
        className="wrap"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Logo />
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: 24,
            fontSize: ".72rem",
            fontWeight: 800,
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          <Link href="/classes">Clases</Link>
          <Link href="/schedule">Horarios</Link>
          <Link href="/barcelona">Barcelona</Link>
          <Link href="/about">La academia</Link>
          <Link href="/family-behring">Familia Behring</Link>
          <Link href="/why-bjj-barcelona">¿Por qué BJJ?</Link>
        </nav>
        <a
          href="https://www.instagram.com/winner_behring_spain/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Winner Behring Spain"
          style={{ display: "inline-flex", width: 38, height: 38, borderRadius: 8, overflow: "hidden" }}
        >
          <Image src="/images/instagram-icon.png" alt="Instagram" width={38} height={38} style={{ width: "100%", height: "100%" }} />
        </a>
        <Link
          href="/free-trial"
          className="button"
          style={{ minHeight: 38, padding: "0 14px" }}
        >
          Clase de prueba
        </Link>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer
      style={{ background: "#000", color: "#dce3e4", padding: "52px 0 25px" }}
    >
      <div className="wrap grid grid-3">
        <div>
          <Logo />
          <p style={{ fontSize: ".9rem", lineHeight: 1.6, maxWidth: 280 }}>
            Brazilian Jiu-Jitsu con tradición Behring, técnica y una comunidad
            que te impulsa.
          </p>
        </div>
        <div>
          <p className="eyebrow">Sedes</p>
          <p>
            Striking Center
            <br />
            Carrer de Verdi, 241 · Gràcia
          </p>
          <p>
            JK1 Boxing
            <br />
            Carrer de l&apos;Havana, 7 · Badalona
          </p>
        </div>
        <div>
          <p className="eyebrow">Empieza hoy</p>
          <p>
            <Link href="/free-trial">Agendar clase de prueba</Link>
          </p>
          <p>
            <a href={site.whatsappUrl} rel="noreferrer">
              +34 645 984 600
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/winner_behring_spain/" target="_blank" rel="noreferrer" style={{ color: "#e86aad", fontWeight: 800 }}>
              @winner_behring_spain
            </a>
          </p>
        </div>
      </div>
      <div
        className="wrap"
        style={{
          borderTop: "1px solid rgba(255,255,255,.12)",
          marginTop: 32,
          paddingTop: 18,
          fontSize: ".72rem",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Winner Behring Spain. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
export function Crumbs({ label }: { label: string }) {
  return (
    <div
      className="wrap"
      style={{ paddingTop: 32, fontSize: ".76rem", color: "#5a666b" }}
    >
      <Link href="/">Inicio</Link> / {label}
    </div>
  );
}
