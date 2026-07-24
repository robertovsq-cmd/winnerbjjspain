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
const factDescriptions: Record<string, string> = {
  "Fundamentals y avanzado": "Empieza con una base sólida de posiciones, seguridad y movimientos esenciales. A medida que progresas, profundizas en transiciones, estrategia y soluciones para situaciones más complejas.",
  Gi: "El kimono permite entender el control, los agarres y la precisión técnica. Aprenderás a utilizar sus detalles de forma segura y progresiva, respetando la tradición del Brazilian Jiu-Jitsu.",
  "Entrenamiento técnico": "Cada clase combina explicación, práctica guiada y repetición consciente. El objetivo es que entiendas el porqué de cada movimiento y puedas aplicarlo con calma y eficacia.",
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
    eyebrow: "BJJ La Salut · Badalona",
    title: "Jiu-Jitsu en La Salut, Badalona.",
    intro: "Entrena en JK1 Boxing, Carrer de l'Havana 7, La Salut, Badalona.",
    facts: ["Martes y jueves", "10:30 y 20:30", "Carrer de l'Havana 7"],
  },
  "/barcelona/lesseps": {
    eyebrow: "BJJ Lesseps · Barcelona",
    title: "Jiu-Jitsu en Lesseps, Barcelona.",
    intro: "Tu grupo de BJJ en Gràcia, a pocos minutos de Lesseps, en Carrer de Verdi 241.",
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
  if (path === "/family-behring") {
    return pageMetadata(
      path,
      "Familia Behring | Historia del Jiu-Jitsu",
      "Conoce la historia de la Familia Behring, la trayectoria de Mestre Flavio Behring y su legado en el Brazilian Jiu-Jitsu.",
    );
  }
  if (path === "/why-bjj-barcelona") {
    return pageMetadata(
      path,
      "¿Por qué entrenar Brazilian Jiu-Jitsu en Barcelona?",
      "Descubre los beneficios del Brazilian Jiu-Jitsu: defensa personal, salud, confianza y técnica en Winner Behring Spain.",
    );
  }
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
              {factDescriptions[fact] ?? "Entrenamiento con método, atención a los detalles y una comunidad que te ayuda a avanzar."}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
function BehringFamilyPage() {
  return (
    <main>
      <section style={{ background: "#000", color: "white", padding: "clamp(70px,12vw,130px) 0" }}>
        <div className="wrap grid grid-2" style={{ alignItems: "center", gap: 48 }}>
          <div>
            <p className="eyebrow">Legado · Desde 1947</p>
            <h1 style={{ fontSize: "clamp(3rem,7vw,6.5rem)", letterSpacing: "-.07em", lineHeight: 0.9, margin: "16px 0 24px" }}>
              La Familia<br /><i style={{ color: "#c9a35e", fontFamily: "Georgia,serif", fontWeight: 400 }}>Behring.</i>
            </h1>
            <p style={{ maxWidth: 570, fontSize: "1.1rem", lineHeight: 1.7, color: "#d9e3e4" }}>
              Una historia de dedicación técnica, formación humana y compromiso con el verdadero espíritu del Jiu-Jitsu.
            </p>
          </div>
          <div style={{ position: "relative", minHeight: 410 }}>
            <Image src="/images/behring-family-history.png" alt="Mestre Flavio Behring junto a miembros de la Familia Behring" fill priority sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>
      <article className="wrap" style={{ maxWidth: 860, padding: "80px 0" }}>
        <p className="eyebrow">La historia</p>
        <h2 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 0.96, letterSpacing: "-.05em", margin: "14px 0 30px" }}>Un legado construido en el tatami.</h2>
        <div style={{ display: "grid", gap: 22, fontSize: "1.05rem", lineHeight: 1.8, color: "#34464d" }}>
          <p>La historia de la Familia Behring forma parte de la historia del Jiu-Jitsu brasileño. En 1947, Flavio Behring comenzó su aprendizaje con Hélio Gracie. De niño, el asma lo mantenía alejado del deporte; el Jiu-Jitsu se convirtió en el camino para desarrollar salud, equilibrio y confianza.</p>
          <p>Con solo 14 años, fue elegido por Carlos Gracie para responder a un desafío público de un luchador japonés llamado Shimura. Su formación continuó como monitor en la Academia Gracie y junto al profesor João Alberto Barreto, de quien asumió temporalmente alumnos durante su recuperación de una lesión.</p>
          <p>En 1963, Flavio viajó a Estados Unidos con João Alberto Barreto para presentar demostraciones técnicas en instituciones como el FBI, la Academia Naval de Annapolis, universidades y academias. El objetivo era claro: mostrar la eficacia del Jiu-Jitsu ante cualquier estilo de lucha.</p>
          <p>También amplió su experiencia practicando y compitiendo en judo. Más tarde, Marcelo y Sylvio Behring empezaron su formación específica bajo la supervisión de su padre, desarrollándose como luchadores y profesores.</p>
          <p>Behring Jiu-Jitsu mantiene esta visión: una institución centrada en la educación, la preparación técnica y el desarrollo del carácter de cada alumno.</p>
        </div>
      </article>
      <section style={{ background: "#e9e5db", padding: "72px 0" }}><div className="wrap" style={{ textAlign: "center" }}><p className="eyebrow">Sigue nuestro día a día</p><h2 style={{ fontSize: "clamp(2rem,4vw,3.4rem)", letterSpacing: "-.05em", margin: "14px 0 24px" }}>Winner Behring Spain en Instagram</h2><a href="https://www.instagram.com/winner_behring_spain/" target="_blank" rel="noreferrer" className="button" style={{ background: "#c13584", color: "white" }}>@winner_behring_spain</a></div></section>
    </main>
  );
}

function WhyBjjBarcelonaPage() {
  const pillars = [
    ["Equilibrio", "Todo empieza por controlar el propio centro de gravedad. El equilibrio permite defenderte y mantener el control en cada movimiento."],
    ["Movimiento", "Desarrollamos movimientos inteligentes que reducen el esfuerzo innecesario y mejoran la eficiencia, el tiempo y la coordinación."],
    ["Palanca", "En lugar de depender de la fuerza física, el Jiu-Jitsu utiliza palancas para controlar a personas más grandes y fuertes con la técnica adecuada."],
  ];
  return <main><section style={{ background: "#071923", color: "white", padding: "clamp(70px,12vw,130px) 0" }}><div className="wrap" style={{ maxWidth: 980 }}><p className="eyebrow">Brazilian Jiu-Jitsu · Barcelona</p><h1 style={{ fontSize: "clamp(3rem,7vw,6.5rem)", letterSpacing: "-.07em", lineHeight: .9, margin: "16px 0 24px" }}>¿Por qué entrenar<br /><i style={{ color: "#c9a35e", fontFamily: "Georgia,serif", fontWeight: 400 }}>Jiu-Jitsu en Barcelona?</i></h1><p style={{ maxWidth: 700, fontSize: "1.12rem", lineHeight: 1.75, color: "#d9e3e4" }}>En Winner Behring Spain creemos que el Brazilian Jiu-Jitsu es mucho más que un arte marcial: es un sistema completo de defensa personal, desarrollo personal, condición física y disciplina, construido sobre más de 75 años de tradición Behring.</p><a href={wa} className="button" style={{ marginTop: 28 }}>Reserva tu clase de prueba</a></div></section><article className="wrap" style={{ maxWidth: 940, padding: "78px 0" }}><section><p className="eyebrow">El arte suave</p><h2 style={{ fontSize: "clamp(2.1rem,4.5vw,3.8rem)", letterSpacing: "-.05em", lineHeight: .96, margin: "14px 0 22px" }}>Un arte marcial inteligente, no agresivo.</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#34464d" }}>A diferencia de lo que muchas personas creen, el BJJ no se basa en golpes ni patadas. Utiliza palanca, equilibrio, movimiento y técnica para controlar a un oponente de forma eficiente. Una persona más pequeña o con menos fuerza puede defenderse frente a alguien mayor aplicando técnica en vez de fuerza. Por eso se conoce como <em>el arte suave</em>.</p></section><section style={{ marginTop: 64 }}><p className="eyebrow">Método Winner Behring</p><h2 style={{ fontSize: "clamp(2.1rem,4.5vw,3.8rem)", letterSpacing: "-.05em", lineHeight: .96, margin: "14px 0 28px" }}>Tres pilares para progresar.</h2><div className="grid grid-3">{pillars.map(([name, text], index) => <article key={name} style={{ borderTop: "2px solid #c9a35e", paddingTop: 20 }}><span className="eyebrow">0{index + 1}</span><h3 style={{ fontSize: "1.6rem", margin: "8px 0" }}>{name}</h3><p style={{ lineHeight: 1.7, color: "#526169" }}>{text}</p></article>)}</div><p style={{ marginTop: 26, lineHeight: 1.75, color: "#34464d" }}>Estos conceptos forman la base del Método Progresivo Winner Behring, preservando la filosofía tradicional transmitida por los maestros Flávio Behring, Sylvio Behring, Maurição Behring y Álvaro Barreto.</p></section><section className="grid grid-2" style={{ marginTop: 72, gap: 45 }}><div><p className="eyebrow">Defensa personal y deporte</p><h2 style={{ fontSize: "2.25rem", letterSpacing: "-.05em", lineHeight: 1 }}>Una formación completa.</h2><p style={{ lineHeight: 1.75, color: "#34464d" }}>En Winner Behring Spain trabajamos defensa personal tradicional, Brazilian Jiu-Jitsu con kimono y grappling No-Gi. Esta combinación te prepara para situaciones reales, el desarrollo personal y la competición si decides seguir ese camino.</p></div><div style={{ background: "#e9e5db", padding: 30 }}><p className="eyebrow">Más allá del tatami</p><h3 style={{ fontSize: "1.7rem", margin: "10px 0" }}>Disciplina para tu vida.</h3><p style={{ lineHeight: 1.7 }}>El entrenamiento desarrolla respeto, autocontrol, confianza, responsabilidad y resiliencia mental. Las clases estructuradas ayudan a niños y adultos a sentirse más centrados y seguros en su día a día.</p></div></section><section style={{ marginTop: 68 }}><p className="eyebrow">Salud, confianza y comunidad</p><h2 style={{ fontSize: "clamp(2.1rem,4.5vw,3.8rem)", letterSpacing: "-.05em", lineHeight: .96, margin: "14px 0 24px" }}>Un entrenamiento que transforma.</h2><p style={{ lineHeight: 1.8, color: "#34464d" }}>Cada clase es un entrenamiento de cuerpo completo que mejora la condición cardiovascular, movilidad, flexibilidad, fuerza funcional, gestión del peso, resistencia y reducción del estrés. No necesitas experiencia previa: recibimos a principiantes, adultos, niños, mujeres, competidores y practicantes recreativos.</p><p style={{ lineHeight: 1.8, color: "#34464d" }}>Al aprender a mantener la calma bajo presión, resolver problemas y superar retos, la confianza que construyes en el tatami se traslada al trabajo, los estudios, las relaciones y la vida cotidiana.</p></section></article><section style={{ background: "#000", color: "white", padding: "72px 0", textAlign: "center" }}><div className="wrap"><p className="eyebrow">Jiu-Jitsu tradicional en Barcelona</p><h2 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-.05em", margin: "14px auto 22px", maxWidth: 820 }}>Empieza hoy tu camino en el Brazilian Jiu-Jitsu.</h2><p style={{ maxWidth: 650, margin: "0 auto", lineHeight: 1.7, color: "#d9e3e4" }}>Entrena con una de las líneas más respetadas del mundo y forma parte de la familia Winner Behring.</p><a href={wa} className="button" style={{ marginTop: 28 }}>Reserva tu clase de prueba</a></div></section></main>;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const path = (await searchParams).page ?? "";
  if (path === "/family-behring") return <BehringFamilyPage />;
  if (path === "/why-bjj-barcelona") return <WhyBjjBarcelonaPage />;
  const data = content[path];
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
