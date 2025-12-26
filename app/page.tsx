import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  Server,
  Code,
  ArrowRight,
  Mail,
  Linkedin,
  FileText,
  ShieldCheck,
  Globe,
  AlertCircle,
  Briefcase,
  Users,
  Layout,
  Lock,
} from "lucide-react";
import ContactFormClient from "./components/ContactFormClient";

type Lang = "en" | "uk";
type SearchParams = Record<string, string | string[] | undefined>;

const TRANSLATIONS = {
  en: {
    nav: {
      about: "About Me",
      challenges: "Solutions",
      expertise: "Expertise",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Atlassian Certified Expert",
      titleTop: "The Atlassian System of Work",
      titleHighlight: "delivered with outcomes",
      desc: "I design and automate Atlassian Cloud setups - processes, automation, integrations, and reporting - so teams ship faster, support meets SLAs, and leadership gets real visibility.",
      btnPrimary: "View Services",
      btnSecondary: "Discuss Project",
    },
    about: {
      title: "What I Do",
      p1: "End-to-end Atlassian delivery: organization administration, permissions, project setup, Jira Service Management portals and SLAs, Confluence knowledge bases, Assets (CMDB), and enterprise-grade automation.",
      p2: "My focus is measurable impact: fewer manual steps, clearer ownership, cleaner data, lower license waste, and smoother cross-team delivery.",
      stat1: "Years of Exp",
      stat2: "Certified Expert",
    },
    tech: {
      title: "Tech Stack & Certifications",
      certsTitle: "Atlassian Certifications",
      certs: [
        "ACP-OA Atlassian Cloud Organization Admin",
        "ACP-JCA Jira Administrator for Cloud",
        "ACP-MJCP Managing Jira Projects Cloud",
        "ASB-152 Issue Security in Jira",
        "Agile in Jira",
        "ITSM with Jira Service Management Foundations",
      ],
      stack: [
        {
          category: "Scripting & Automation",
          items: "Automation for Jira (Smart Values, JSON), ScriptRunner (Groovy), Python",
        },
        { category: "Integration & Dev", items: "REST API, Webhooks, Forge, OAuth" },
        {
          category: "Advanced Apps",
          items: "Assets (Insight CMDB), EazyBI (BI Reports), Xray (QA/Test)",
        },
        { category: "Security & Infra", items: "Atlassian Guard (SSO/SCIM), AWS / Azure basics" },
      ],
    },
    challenges: {
      title: "Challenges I Solve",
      desc: "Typical bottlenecks organizations face and how I fix them using the Atlassian ecosystem.",
      items: [
        {
          problem: "Process chaos and inconsistent standards",
          solution:
            "I implement pragmatic governance, normalize workflows, and establish ownership and operating procedures across teams.",
        },
        {
          problem: "Disconnected tools and data silos",
          solution:
            "I integrate Jira with CI/CD, CRM, and collaboration tools via REST API and webhooks to build a cohesive delivery system.",
        },
        {
          problem: "Low visibility for management",
          solution:
            "I build dashboards, reporting, and planning views that reflect the reality of delivery, not just ticket counts.",
        },
        {
          problem: "Slow support response and missed SLAs",
          solution:
            "I optimize queues, SLAs, automations, and self-service portals to reduce MTTR and increase deflection.",
        },
        {
          problem: "Compliance and security gaps",
          solution:
            "I harden permission models, run access reviews, and align configurations with GDPR/ISO-style requirements.",
        },
        {
          problem: "License cost waste",
          solution:
            "I audit usage and access paths, optimize licensing, and clean up old projects to reduce total cost of ownership. I also automate ongoing license management.",
        },
      ],
    },
    areas: {
      title: "Areas of Expertise",
      desc: "I tailor Atlassian tooling to business processes across departments.",
      items: [
        {
          title: "IT & Operations (ITSM)",
          list: [
            "Incident/Change/Request management",
            "Asset Management (Assets/Insight)",
            "JSM Operations (Opsgenie) on-call setup",
          ],
          icon: <Server aria-hidden="true" />,
        },
        {
          title: "Software Delivery (DevOps)",
          list: ["Agile at scale", "CI/CD integrations (Bitbucket/GitLab/GitHub)", "Release and change enablement"],
          icon: <Code aria-hidden="true" />,
        },
        {
          title: "Project Management",
          list: ["Resource planning", "Advanced Roadmaps (Plans)", "Hybrid delivery models"],
          icon: <Briefcase aria-hidden="true" />,
        },
        {
          title: "HR & People Ops",
          list: ["Onboarding/offboarding automation", "Employee service desk", "Knowledge base enablement"],
          icon: <Users aria-hidden="true" />,
        },
        {
          title: "Legal & Finance",
          list: ["Approvals and controls", "Confluence documentation workflows", "Procurement and audit trails"],
          icon: <Lock aria-hidden="true" />,
        },
        {
          title: "Marketing & Sales",
          list: ["Campaign execution tracking", "CRM integrations", "Cross-team intake and triage"],
          icon: <Layout aria-hidden="true" />,
        },
      ],
    },
    services: {
      title: "Service Packages",
      desc: "Personalized collaboration models tailored to your goals.",
      items: [
        {
          title: "Basic Consulting",
          desc: "Practical improvements and safe configuration changes to stabilize your environment.",
          features: ["Instance health check", "User and license management", "Baseline setup", "Admin workshops"],
        },
        {
          title: "Atlassian Tech Assessment",
          desc: "Deep technical analysis to identify bottlenecks and risks.",
          features: ["Performance review", "Security check", "Migration planning", "Architecture review"],
        },
        {
          title: "Proof of Value (PoV)",
          desc: "Demonstrate value with a pilot before scaling company-wide.",
          features: ["Pilot delivery", "Targeted customization", "Hypothesis testing", "Value and ROI summary"],
        },
        {
          title: "R&D & Custom Dev",
          desc: "Automation and integrations for unique requirements.",
          features: ["Forge apps and extensions", "Automation design", "External integrations", "Platform hardening"],
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      desc: "Enterprise-level system migration and optimization cases.",
      items: [
        {
          category: "Banking • Security",
          title: "High-Security Audit and Hardening",
          desc: "Deep technical audit of Atlassian infrastructure for a major bank. Identified vulnerabilities and optimized performance under high load.",
          outcomes: ["Permission model redesign", "GDPR/ISO compliance readiness"],
          tags: ["Security", "Compliance", "Performance"],
        },
        {
          category: "Telecom • ITSM",
          title: "L1-L3 Support Transformation",
          desc: "Unified service desk for a global provider. Streamlined incident management and automated request fulfillment.",
          outcomes: ["Reduced MTTR by ~40%", "24/7 on-call and escalation design"],
          tags: ["JSM", "SLA", "Automation"],
        },
        {
          category: "MSP • Operations",
          title: "Multi-Client Support Model",
          desc: "Architecture for an IT service provider to support multiple external clients within a single Atlassian instance.",
          outcomes: ["Data segregation between clients", "Automated billing reports"],
          tags: ["Multi-tenancy", "Governance", "Tempo"],
        },
        {
          category: "Enterprise • Migration",
          title: "Large-scale migration and unification",
          desc: "Merging 20+ disparate Jira Cloud/DC instances into a single target instance and implementing a unified methodology.",
          outcomes: ["Global workflow standardization", "License cost optimization"],
          tags: ["Migration", "Data Center", "Governance"],
        },
      ],
    },
    contact: {
      title: "Let's Discuss Your Project",
      desc: "Fill out the form or contact me directly. I take on audits, migrations, automation, and integration work.",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Request",
      },
      footer: "Based on professional expertise and hands-on delivery experience.",
    },
  },
  uk: {
    nav: {
      about: "Про мене",
      challenges: "Рішення",
      expertise: "Експертиза",
      services: "Послуги",
      projects: "Проєкти",
      contact: "Контакти",
      cta: "Зв'язатися",
    },
    hero: {
      badge: "Atlassian Certified Expert",
      titleTop: "Екосистема Atlassian",
      titleHighlight: "з результатами для бізнесу",
      desc: "Проєктую та автоматизую Atlassian Cloud - процеси, управління (governance), інтеграції та звітність - щоб команди працювали швидше, підтримка виконувала SLA, а менеджмент бачив реальну картину.",
      btnPrimary: "Оглянути послуги",
      btnSecondary: "Обговорити проєкт",
    },
    about: {
      title: "Чим я займаюся",
      p1: "Повний цикл впровадження Atlassian: адміністрування організації, схеми доступу, налаштування проєктів, портали та SLA в Jira Service Management, база знань у Confluence, Assets (CMDB) та автоматизації.",
      p2: "Фокус на вимірюваному ефекті: менше ручної роботи, чітка відповідальність, чисті дані, оптимізація витрат на ліцензії та краща взаємодія між командами.",
      stat1: "Років досвіду",
      stat2: "Certified Expert",
    },
    tech: {
      title: "Технології та Сертифікації",
      certsTitle: "Сертифікати Atlassian",
      certs: [
        "ACP-OA Atlassian Cloud Organization Admin",
        "ACP-JCA Jira Administrator for Cloud",
        "ACP-MJCP Managing Jira Projects Cloud",
        "ASB-152 Issue Security in Jira",
        "Agile in Jira",
        "ITSM with Jira Service Management Foundations",
      ],
      stack: [
        {
          category: "Scripting & Automation",
          items: "Automation for Jira (Smart Values, JSON), ScriptRunner (Groovy), Python",
        },
        { category: "Integration & Dev", items: "REST API, Webhooks, Forge, OAuth" },
        {
          category: "Advanced Apps",
          items: "Assets (Insight CMDB), EazyBI (BI Reports), Xray (QA/Test)",
        },
        { category: "Security & Infra", items: "Atlassian Guard (SSO/SCIM), AWS / Azure basics" },
      ],
    },
    challenges: {
      title: "Проблеми, які я вирішую",
      desc: "Типові вузькі місця та способи їх усунення за допомогою продуктів Atlassian.",
      items: [
        {
          problem: "Хаос у процесах та відсутність стандартів",
          solution:
            "Впроваджую практичне управління та стандарти, уніфікую робочі процеси і закріплюю відповідальних та правила роботи команд.",
        },
        {
          problem: "Ізольовані інструменти та дані",
          solution:
            "Інтегрую Jira з CI/CD, CRM та комунікаційними інструментами через REST API та вебхуки.",
        },
        {
          problem: "Немає прозорості для менеджменту",
          solution:
            "Будую звітність і дашборди, які показують реальний стан виконання, а не просто кількість задач.",
        },
        {
          problem: "Повільна підтримка та збої в SLA",
          solution:
            "Оптимізую черги, SLA, автоматизації та портали самообслуговування для зменшення MTTR та зростання самообслуговування (менше звернень до агентів).",
        },
        {
          problem: "Прогалини в безпеці та відповідності вимогам",
          solution:
            "Підсилюю модель прав доступу, проводжу перегляд доступів і документую зміни під вимоги GDPR/ISO-подібних стандартів.",
        },
        {
          problem: "Зайві витрати на ліцензії",
          solution:
            "Аналізую використання та доступ, оптимізую ліцензії, автоматизую процес ефективного управління ліцензіями.",
        },
      ],
    },
    areas: {
      title: "Сфери експертизи",
      desc: "Адаптую інструменти Atlassian під бізнес-процеси різних департаментів.",
      items: [
        {
          title: "IT та Оперейшн (ITSM)",
          list: [
            "Управління інцидентами/змінами/запитами",
            "Управління активами (Assets/Insight)",
            "JSM Operations (Opsgenie): налаштування on-call чергувань",
          ],
          icon: <Server aria-hidden="true" />,
        },
        {
          title: "Розробка та DevOps",
          list: ["Agile у масштабі", "Інтеграції CI/CD (Bitbucket/GitLab/GitHub)", "Релізи та керування змінами (change enablement)"],
          icon: <Code aria-hidden="true" />,
        },
        {
          title: "Управління проєктами",
          list: ["Планування ресурсів", "Advanced Roadmaps (Plans)", "Гібридні моделі виконання"],
          icon: <Briefcase aria-hidden="true" />,
        },
        {
          title: "HR та People Ops",
          list: ["Автоматизація онбордингу/офбордингу", "Сервіс-деск для співробітників", "Розвиток бази знань"],
          icon: <Users aria-hidden="true" />,
        },
        {
          title: "Юридичний та фінансовий департамент",
          list: ["Погодження та контроль", "Процеси документації в Confluence", "Закупівлі та аудиторські сліди (audit trail)"],
          icon: <Lock aria-hidden="true" />,
        },
        {
          title: "Маркетинг і продажі",
          list: ["Відстеження виконання кампаній", "Інтеграції з CRM", "Прийом і тріаж запитів між командами"],
          icon: <Layout aria-hidden="true" />,
        },
      ],
    },
    services: {
      title: "Пакети послуг",
      desc: "Персоналізовані моделі співпраці відповідно до ваших цілей.",
      items: [
        {
          title: "Базовий консалтинг",
          desc: "Практичні покращення та безпечні зміни конфігурації для стабілізації середовища.",
          features: ["Перевірка стану інстансу", "Керування користувачами та ліцензіями", "Базові налаштування", "Воркшопи для адміністраторів"],
        },
        {
          title: "Технічний аудит Atlassian",
          desc: "Глибокий технічний аналіз вузьких місць і ризиків.",
          features: ["Огляд продуктивності", "Перевірка безпеки", "План міграції", "Архітектурний рев'ю"],
        },
        {
          title: "Proof of Value (PoV)",
          desc: "Пілот, який показує цінність перед масштабуванням.",
          features: ["Пілот delivery", "Цільова кастомізація", "Тестування гіпотез", "Підсумок цінності та ROI"],
        },
        {
          title: "R&D та індивідуальна розробка",
          desc: "Автоматизації та інтеграції під нестандартні вимоги.",
          features: ["Forge-додатки", "Дизайн автоматизацій", "Зовнішні інтеграції", "Підсилення платформи"],
        },
      ],
    },
    projects: {
      title: "Вибрані проєкти",
      desc: "Кейси з міграції та оптимізації систем корпоративного рівня.",
      items: [
        {
          category: "Banking • Security",
          title: "Аудит та зміцнення безпеки",
          desc: "Глибокий технічний аудит інфраструктури Atlassian для великого банку. Виявлення вразливостей та оптимізація продуктивності.",
          outcomes: ["Редизайн моделі прав доступу", "Відповідність вимогам GDPR/ISO"],
          tags: ["Security", "Compliance", "Performance"],
        },
        {
          category: "Telecom • ITSM",
          title: "Трансформація L1-L3 підтримки",
          desc: "Побудова єдиного Service Desk для глобального провайдера. Оптимізація інцидентів та автоматизація запитів.",
          outcomes: ["Зменшення MTTR приблизно на 40%", "Налаштування чергувань 24/7"],
          tags: ["JSM", "SLA", "Automation"],
        },
        {
          category: "MSP • Operations",
          title: "Модель підтримки Multi-Client",
          desc: "Архітектура для IT-провайдера, що дозволяє обслуговувати багатьох зовнішніх клієнтів в одному інстансі.",
          outcomes: ["Сегрегація даних між клієнтами", "Автоматичні звіти для білінгу"],
          tags: ["Multi-tenancy", "Governance", "Tempo"],
        },
        {
          category: "Enterprise • Migration",
          title: "Масштабна міграція та уніфікація",
          desc: "Злиття 20+ розрізнених Jira Cloud/DC в один таргет-інстанс та впровадження єдиної методології.",
          outcomes: ["Глобальна уніфікація воркфлоу", "Оптимізація витрат на ліцензії"],
          tags: ["Migration", "Data Center", "Governance"],
        },
      ],
    },
    contact: {
      title: "Давайте обговоримо ваш проєкт",
      desc: "Заповніть форму або напишіть напряму. Беру в роботу аудити, міграції, автоматизації та інтеграції.",
      form: {
        name: "Ваше ім'я",
        email: "Email",
        message: "Повідомлення",
        submit: "Відправити запит",
      },
      footer: "На основі професійної експертизи та практичного досвіду впроваджень.",
    },
  },
} as const;

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" }) => {
  const base =
    "px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center gap-2 justify-center";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
      : "border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams> | SearchParams;
}) {
  const sp = (await Promise.resolve(searchParams ?? {})) as SearchParams;

  const rawLang = sp.lang;
  const lang: Lang = (Array.isArray(rawLang) ? rawLang[0] : rawLang) === "uk" ? "uk" : "en";
  const t = TRANSLATIONS[lang];

  const nextLang: Lang = lang === "en" ? "uk" : "en";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
              Oleksandr<span className="text-blue-600">.Tolochko</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.about}
              </a>
              <a href="#challenges" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.challenges}
              </a>
              <a href="#areas" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.expertise}
              </a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.services}
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.projects}
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">
                {t.nav.contact}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={{ pathname: "/", query: { lang: nextLang } }}
                className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition px-2 py-1 rounded hover:bg-slate-100"
                aria-label="Switch language"
              >
                <Globe size={18} aria-hidden="true" /> <span className="uppercase">{lang}</span>
              </Link>

              <a
                href="#contact"
                className="hidden sm:block bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition text-sm"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {t.hero.titleTop}
            <br />
            <span className="text-blue-600">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button type="button">
                {t.hero.btnPrimary} <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </a>
            <a href="#contact">
              <Button type="button" variant="outline">
                {t.hero.btnSecondary}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{t.about.title}</h2>
            <p className="text-slate-600 mb-4 text-lg">{t.about.p1}</p>
            <p className="text-slate-600">{t.about.p2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase">{t.about.stat1}</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">ACE</div>
              <div className="text-sm text-slate-500 font-medium uppercase">{t.about.stat2}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.tech.title}</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-blue-400" aria-hidden="true" /> {t.tech.certsTitle}
              </h3>
              <div className="grid gap-3">
                {t.tech.certs.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    <span className="font-medium text-slate-200 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {t.tech.stack.map((item, i) => (
                <div key={i}>
                  <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-wider">{item.category}</h4>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 font-mono text-sm">
                    {item.items}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.challenges.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.challenges.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.challenges.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 group hover:border-blue-200 transition-colors"
              >
                <div className="mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-sm uppercase tracking-wide">
                    <AlertCircle size={14} aria-hidden="true" /> Problem
                  </div>
                  <h4 className="font-semibold text-slate-700">{item.problem}</h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm uppercase tracking-wide">
                    <CheckCircle size={14} aria-hidden="true" /> Solution
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.areas.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.areas.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.areas.items.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.list.map((li, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 min-h-[48px]">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.projects.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.projects.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200 transition-all flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-5 leading-relaxed">{project.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {project.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-blue-600 p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.title}</h3>
              <p className="text-blue-100 mb-8">{t.contact.desc}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/50 rounded-lg">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Email</p>
                    <a className="font-medium hover:text-blue-200" href="mailto:contact@oleksandr.dev">
                      contact@oleksandr.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/50 rounded-lg">
                    <Linkedin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Social</p>
                    <a href="#" className="font-medium hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm text-blue-200">© 2024 Oleksandr Tolochko</p>
            </div>
          </div>

          <div className="p-10 md:w-3/5">
            <ContactFormClient lang={lang} labels={t.contact.form} />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500">
        <div className="flex justify-center items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
          <span className="font-semibold text-slate-700">Atlassian Solution Paper Adaptation</span>
        </div>
        <p className="text-sm">{t.contact.footer}</p>
      </footer>
    </div>
  );
}