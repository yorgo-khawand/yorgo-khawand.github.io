import Head from "next/head";

const role = "Cybersecurity Analyst";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yorgo-khawand",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yorgokhawand",
  },
  {
    label: "TryHackMe",
    href: "https://tryhackme.com/p/yorgoK",
  },
];

const focusAreas = [
  "Web application security",
  "Network and system security",
  "Security monitoring and incident response",
  "Threat analysis and practical labs",
  "Security hardening and best practices",
  "Hands-on learning through platforms",
];



const learningHighlights = [
  "TryHackMe rooms, pathways, and badges",
  "Write-ups for labs, boxes, or practical exercises",
  "Security notes, mini research, or methodology breakdowns",
  "Selected certifications or ongoing learning goals",
];

const toolbox = [
  "Nmap",
  "Burp Suite",
  "Wireshark",
  "Linux",
  "Python",
  "Bash",
  "Git",
  "OWASP Top 10",
  "SIEM basics",
  "Incident response fundamentals",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yorgo Khawand",
  jobTitle: role,
  url: "https://yorgo.eu.org",
  image: "https://yorgo.eu.org/images/profile.png",
  sameAs: socialLinks
    .filter((item) => item.label !== "Email")
    .map((item) => item.href),
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Yorgo Khawand | Cybersecurity Specialist</title>
        <meta
          name="description"
          content="Cybersecurity portfolio of Yorgo Khawand, featuring projects, labs, tools and hands-on security work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Yorgo Khawand | Cybersecurity Specialist" />
        <meta
          property="og:description"
          content="Projects, labs and practical work across cybersecurity, security testing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yorgo.eu.org" />
        <meta property="og:image" content="https://yorgo.eu.org/images/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                {role}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Yorgo Khawand
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I am building a practical cybersecurity career through hands-on labs,
                security testing, defensive analysis and continuous learning across
                modern attack and defense workflows.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 px-3 py-1">Beirut, Lebanon</span>
                <span className="rounded-full border border-white/10 px-3 py-1">TryHackMe labs</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Security projects</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Continuous learning</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
            </div>

            <div className="w-full max-w-sm">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/profile.png"
                    alt="Yorgo Khawand"
                    className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
                  />
                  <div>
                    <p className="text-sm text-slate-400">Focused on</p>
                    <p className="text-lg font-semibold text-white">Cybersecurity growth</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-slate-400">Track</p>
                    <p className="mt-1 font-semibold text-white">Offense + Defense</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-slate-400">Focus</p>
                    <p className="mt-1 font-semibold text-white">Hands-on labs</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-slate-400">Portfolio</p>
                    <p className="mt-1 font-semibold text-white">Projects + write-ups</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-slate-400">Availability</p>
                    <p className="mt-1 font-semibold text-white">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
