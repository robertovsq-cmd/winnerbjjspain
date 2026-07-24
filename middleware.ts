import { NextResponse, type NextRequest } from "next/server";

const landingPages = new Set([
  "/about", "/classes", "/schedule", "/pricing", "/blog", "/contact", "/barcelona",
  "/barcelona/gracia", "/barcelona/la-salut", "/barcelona/lesseps", "/no-gi", "/kids",
  "/women", "/private-lessons", "/competition", "/free-trial"
]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (!landingPages.has(path)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.searchParams.set("page", path);
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"] };
