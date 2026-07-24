import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/images/hero-training.jpeg");

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "es_ES", siteName: site.name, url, title, description, images: [{ url: image, alt: "Entrenamiento de Brazilian Jiu-Jitsu Winner Behring Spain" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
