import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://winnerbjjspain.vercel.app"),
  title: { default: "Winner Behring Spain | Brazilian Jiu-Jitsu en Barcelona", template: "%s | Winner Behring Spain" },
  description: "Entrena Brazilian Jiu-Jitsu con Winner Behring Spain en Gràcia, Barcelona, y Badalona. Clases para adultos, niños y competición.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: "Winner Behring Spain", title: "Winner Behring Spain | Brazilian Jiu-Jitsu", description: "Jiu-Jitsu con tradición, técnica y comunidad en Barcelona y Badalona." },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "SportsActivityLocation", name: "Winner Behring Spain", url: "https://winnerbjjspain.vercel.app", telephone: "+34645984600", sport: "Brazilian Jiu-Jitsu", address: { "@type": "PostalAddress", streetAddress: "Carrer de Verdi, 241", addressLocality: "Barcelona", postalCode: "08024", addressCountry: "ES" }, areaServed: ["Barcelona", "Gràcia", "Badalona"], priceRange: "€€" };
  return <html lang="es"><body><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
