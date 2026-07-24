import type { MetadataRoute } from "next";

const routes = ["", "/about", "/classes", "/schedule", "/pricing", "/blog", "/contact", "/barcelona", "/barcelona/gracia", "/barcelona/la-salut", "/barcelona/lesseps", "/no-gi", "/kids", "/women", "/private-lessons", "/competition", "/free-trial"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://winnerbjjspain.vercel.app${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
