import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./ui";
import { absoluteUrl, site } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Brazilian Jiu-Jitsu en Barcelona | Winner Behring Spain", template: "%s | Winner Behring Spain" },
  description: "Entrena Brazilian Jiu-Jitsu con Winner Behring Spain en Gràcia, Barcelona, y Badalona. Clases para adultos, niños y competición.",
  openGraph: { type: "website", locale: "es_ES", siteName: site.name, images: [{ url: absoluteUrl("/images/hero-training.jpeg"), alt: "Entrenamiento de Brazilian Jiu-Jitsu Winner Behring Spain" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, telephone: site.phone, logo: absoluteUrl("/images/winner-logo.png") },
      { "@type": "SportsActivityLocation", "@id": `${site.url}/#gracia`, name: "Winner Behring Spain – Gràcia", url: absoluteUrl("/barcelona/gracia"), telephone: site.phone, sport: "Brazilian Jiu-Jitsu", priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: "Carrer de Verdi, 241", addressLocality: "Barcelona", postalCode: "08024", addressCountry: "ES" }, areaServed: ["Barcelona", "Gràcia", "Lesseps"] },
      { "@type": "SportsActivityLocation", "@id": `${site.url}/#badalona`, name: "Winner Behring Spain – Badalona", url: absoluteUrl("/barcelona/la-salut"), telephone: site.phone, sport: "Brazilian Jiu-Jitsu", priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: "Carrer de l'Havana, 7", addressLocality: "Badalona", postalCode: "08914", addressCountry: "ES" }, areaServed: ["Badalona", "Barcelona"] },
    ],
  };
  return <html lang="es"><body><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
