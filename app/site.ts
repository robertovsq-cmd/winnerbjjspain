export const site = {
  name: "Winner Behring Spain",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://winnerbjjspain.vercel.app",
  phone: "+34645984600",
  whatsappUrl:
    "https://wa.me/34645984600?text=Hola%2C%20quiero%20reservar%20una%20clase%20de%20prueba",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
