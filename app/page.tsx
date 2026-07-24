import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "./seo";

const wa =
  "https://wa.me/34645984600?text=Hola%2C%20quiero%20reservar%20una%20clase%20de%20prueba";
type Content = {
  eyebrow: string;
  title: string;
  intro: string;
  facts: string[];
};
const content: Record<string, Content> = {
  "/about": {
    eyebrow: "La academia",
    title: "Tradición que se entrena cada día.",
    intro:
      "Winner Behring Spain reúne técnica, respeto y una comunidad comprometida con el Jiu-Jitsu.",
    facts: [
      "Tradición Behring",
      "Todos los niveles",
      "Comunidad internacional",
    ],
  },
  "/classes": {
    eyebrow: "Clases de BJJ",
    title: "Tu camino empieza en el tatami.",
    intro:
      "Clases estructuradas para aprender, mejorar tu condición y disfrutar del Jiu-Jitsu desde el primer día.",
    facts: ["Fundamentals y avanzado", "Gi", "Entrenamiento técnico"],
  },
  "/schedule": {
    eyebrow: "Horarios",
    title: "Encuentra tu horario de entrenamiento.",
    intro:
      "Reserva antes tu clase de prueba por WhatsApp y elige la sede que mejor te convenga.",
    facts: [
      "Gràcia · lunes, miércoles y viernes · 20:30",
      "Gràcia · martes y jueves · 16:30",
      "Badalona · martes y jueves · 10:30 y 20:30",
    ],
  },
  "/pricing": {
    eyebrow: "Planes",
    title: "Entrena con continuidad.",
    intro:
      "Pregunta por la clase de prueba y por el plan que mejor encaja contigo.",
    facts: ["Clase de prueba", "Planes mensuales", "Opciones flexibles"],
  },
  "/contact": {
    eyebrow: "Contacto",
    title: "Hablemos de tu primera clase.",
    intro: "Escríbenos directamente por WhatsApp y elige tu sede y horario.",
    facts: ["+34 645 984 600", "Gràcia", "Badalona"],
  },
  "/no-gi": {
    eyebrow: "No-Gi",
    title: "Control, movimiento y adaptación.",
    intro: "Completa tu Jiu-Jitsu con entrenamiento de grappling sin kimono.",
    facts: ["Grappling", "Todos los niveles", "Barcelona"],
  },
  "/kids": {
    eyebrow: "Jiu-Jitsu para niños",
    title: "Confianza que se aprende jugando.",
    intro:
      "Un entorno seguro para aprender disciplina, respeto y coordinación.",
    facts: ["Coordinación", "Respeto", "Confianza"],
  },
  "/women": {
    eyebrow: "Mujeres en BJJ",
    title: "Más técnica. Más confianza.",
    intro:
      "Empieza Jiu-Jitsu en una comunidad que te acompaña desde el primer día.",
    facts: ["Todos los niveles", "Ambiente inclusivo", "Defensa personal"],
  },
  "/private-lessons": {
    eyebrow: "Clases privadas",
    title: "Tu objetivo, un plan a medida.",
    intro:
      "Sesiones individuales para profundizar en técnica, estrategia y objetivos concretos.",
    facts: ["Técnica específica", "Preparación", "Horario flexible"],
  },
  "/competition": {
    eyebrow: "Competición",
    title: "Prepárate para rendir.",
    intro:
      "Desarrolla técnica, ritmo y estrategia para tus objetivos competitivos.",
    facts: ["Estrategia", "Preparación", "Comunidad"],
  },
  "/free-trial": {
    eyebrow: "Primera clase",
    title: "Empieza tu Jiu-Jitsu hoy.",
    intro:
      "No necesitas experiencia. Ven con ropa deportiva cómoda; nosotros te orientamos.",
    facts: ["Sin experiencia", "Gràcia o Badalona", "Reserva por WhatsApp"],
  },
  "/barcelona": {
    eyebrow: "Winner Behring Spain",
    title: "Tu Jiu-Jitsu, cerca de ti.",
    intro:
      "Entrena en Gràcia, Barcelona, o en Badalona con el equipo de Winner Behring Spain.",
    facts: ["Gràcia", "Badalona", "Clase de prueba"],
  },
  "/barcelona/gracia": {
    eyebrow: "BJJ Gràcia",
    title: "Jiu-Jitsu en Gràcia.",
    intro: "Entrena en Striking Center Barcelona, Carrer de Verdi 241.",
    facts: [
      "Lunes, miércoles y viernes · 20:30",
      "Martes y jueves · 16:30",
      "Carrer de Verdi 241",
    ],
  },
  "/barcelona/la-salut": {
    eyebrow: "BJJ Badalona",
    title: "Jiu-Jitsu en Badalona.",
    intro: "Entrena en JK1 Boxing, Carrer de l'Havana 7.",
    facts: ["Martes y jueves", "10:30 y 20:30", "Carrer de l'Havana 7"],
  },
  "/barcelona/lesseps": {
    eyebrow: "BJJ Lesseps",
    title: "Jiu-Jitsu cerca de Lesseps.",
    intro: "Tu grupo de BJJ en Gràcia, a pocos minutos de Lesseps.",
    facts: [
      "Carrer de Verdi 241",
      "Lunes, miércoles y viernes · 20:30",
      "Martes y jueves · 16:30",
    ],
  },
  "/blog": {
    eyebrow: "Blog",
    title: "Aprende más sobre Jiu-Jitsu.",
    intro:
      "Técnica, entrenamiento, competición y vida en la comunidad Winner Behring.",
    facts: ["Para principiantes", "Entrenamiento", "Barcelona"],
  },
};
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const path = (await searchParams).page ?? "/";
  const p = content[path];
  return p
    ? pageMetadata(path, p.title, p.intro)
    : pageMetadata("/", "Brazilian Jiu-Jitsu en Barcelona", "Entrena Brazilian Jiu-Jitsu con Winner Behring Spain en Gràcia, Barcelona, y Badalona. Clases para adultos, niños y competición.");
}
function Page({ data }: { data: Content }) {
  return (
    <main>
      <section
        style={{
          background: "#0b2635",
          color: "white",
          padding: "clamp(70px,12vw,130px) 0",
        }}
      >
        <div className="wrap">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1
            style={{
              fontSize: "clamp(3rem,7vw,6.5rem)",
              letterSpacing: "-.07em",
              lineHeight: 0.9,
              maxWidth: 900,
              margin: "16px 0 24px",
            }}
          >
            {data.title}
          </h1>
          <p
            style={{
              maxWidth: 630,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#d9e3e4",
            }}
          >
            {data.intro}
          </p>
          <a href={wa} className="button" style={{ marginTop: 30 }}>
            Reservar clase de prueba
          </a>
        </div>
      </section>
      <section className="wrap grid grid-3" style={{ padding: "75px 0" }}>
        {data.facts.map((fact, index) => (
          <article
            key={fact}
            style={{ borderTop: "2px solid #c9a35e", paddingTop: 20 }}
          >
            <span className="eyebrow">0{index + 1}</span>
            <h2 style={{ fontSize: "1.45rem" }}>{fact}</h2>
            <p style={{ lineHeight: 1.6, color: "#526169" }}>
              Entrenamiento con método, atención a los detalles y una comunidad
              que te ayuda a avanzar.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const data = content[(await searchParams).page ?? ""];
  if (data) return <Page data={data} />;
  return (
    <main>
      <section style={{ background: "#071923", color: "white" }}>
        <div
          className="wrap grid grid-2"
          style={{
            minHeight: "min(780px,calc(100vh - 72px))",
            alignItems: "center",
            gap: 30,
            padding: "clamp(55px,8vw,100px) 0",
          }}
        >
          <div>
            <p className="eyebrow">
              Brazilian Jiu-Jitsu · Barcelona y Badalona
            </p>
            <h1
              style={{
                fontSize: "clamp(3.2rem,7.3vw,6.7rem)",
                lineHeight: 0.88,
                letterSpacing: "-.07em",
                margin: "18px 0 28px",
              }}
            >
              Jiu-Jitsu
              <br />
              <i
                style={{
                  color: "#c9a35e",
                  fontFamily: "Georgia,serif",
                  fontWeight: 400,
                }}
              >
                para avanzar.
              </i>
            </h1>
            <p
              style={{
                maxWidth: 510,
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: "#d9e3e4",
              }}
            >
              Una academia de BJJ para construir técnica, confianza y una
              práctica que dure toda la vida.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              <a className="button" href={wa}>
                Reserva tu primera clase
              </a>
              <Link className="button button-outline" href="/schedule">
                Ver horarios
              </Link>
            </div>
          </div>
          <div
            style={{ position: "relative", minHeight: 480, overflow: "hidden" }}
          >
            <Image
              src="/images/hero-training.jpeg"
              alt="Entrenamiento de Brazilian Jiu-Jitsu Winner Behring"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>
      <section className="wrap" style={{ padding: "84px 0" }}>
        <p className="eyebrow">Sedes y horarios</p>
        <h2
          style={{
            fontSize: "clamp(2.2rem,5vw,4rem)",
            lineHeight: 0.95,
            letterSpacing: "-.05em",
            margin: "14px 0 38px",
          }}
        >
          Dos sedes.
          <br />
          Una misma línea.
        </h2>
        <div className="grid grid-2">
          <article style={{ background: "#e9e5db", padding: 32 }}>
            <p className="eyebrow">Gràcia · Barcelona</p>
            <h3 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
              Striking Center
            </h3>
            <p>Carrer de Verdi, 241 · 08024 Barcelona</p>
            <p style={{ fontWeight: 800 }}>
              Lunes, miércoles y viernes · 20:30
              <br />
              Martes y jueves · 16:30
            </p>
            <a href={wa} className="button">
              Reservar en Gràcia
            </a>
          </article>
          <article
            style={{ background: "#0b2635", color: "white", padding: 32 }}
          >
            <p className="eyebrow">Badalona</p>
            <h3 style={{ fontSize: "1.8rem", margin: "10px 0" }}>JK1 Boxing</h3>
            <p>Carrer de l&apos;Havana, 7 · 08914 Badalona</p>
            <p style={{ fontWeight: 800 }}>Martes y jueves · 10:30 y 20:30</p>
            <a href={wa} className="button button-outline">
              Reservar en Badalona
            </a>
          </article>
        </div>
      </section>
      <section
        className="wrap grid grid-2"
        style={{ padding: "84px 0", alignItems: "center", gap: 40 }}
      >
        <div style={{ position: "relative", minHeight: 420 }}>
          <Image
            src="/images/community.jpeg"
            alt="Comunidad Winner Behring después de un entrenamiento"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p className="eyebrow">Comunidad Winner</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem,5vw,4rem)",
              letterSpacing: "-.05em",
              lineHeight: 0.95,
              margin: "14px 0 20px",
            }}
          >
            Entrena con personas que te impulsan.
          </h2>
          <p style={{ lineHeight: 1.7, maxWidth: 520 }}>
            El Jiu-Jitsu se construye juntos: aprendizaje, esfuerzo, respeto y
            buenos compañeros de tatami.
          </p>
          <a href={wa} className="button" style={{ marginTop: 24 }}>
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
