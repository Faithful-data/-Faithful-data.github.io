/* =========================================================
   EDITABLE PORTFOLIO CONTENT
   ---------------------------------------------------------
   You can update most portfolio content from this file.
   Keep the HTML/CSS unchanged unless you want to change
   the layout or visual design.
   ========================================================= */

const skills = [
  { title: "Data Analysis", text: "Cleaning, exploration, KPI analysis and turning business questions into measurable insights.", tools: ["Excel", "Power Query", "SQL", "Python"] },
  { title: "Business Intelligence", text: "Decision-focused dashboards and reporting that make trends, exceptions and performance visible.", tools: ["Power BI", "DAX", "Data Modelling"] },
  { title: "Fintech Operations", text: "Reconciliation, settlement and dispute analysis with a strong focus on financial accuracy and controls.", tools: ["Reconciliation", "Settlement", "Chargebacks"] },
  { title: "Research & Education", text: "Market intelligence, research coordination and practical analytics education for aspiring professionals.", tools: ["Research", "Mentorship", "Data Storytelling"] }
];

const experience = [
  {
    date: "Mar 2023 — Present",
    company: "FairMoney Microfinance",
    role: "Reconciliation & Disputes Specialist",
    points: [
      "Reconcile POS transactions and investigate discrepancies across settlement records.",
      "Automate reconciliation workflows with Excel VBA, reducing manual effort by 40%.",
      "Manage chargeback processes and maintain detailed settlement, bank and audit documentation."
    ]
  },
  {
    date: "Jul 2026",
    company: "Afriment",
    role: "Data Analysis Intern · Team Lead",
    points: [
      "Led analytics interns on research and market-intelligence projects focused on African technology companies.",
      "Coordinated data collection, validation and standardisation across research sources.",
      "Built dashboards and translated findings into recommendations for learner readiness and industry partnership opportunities."
    ]
  },
  {
    date: "2021 — 2023",
    company: "Crowdforce / Payforce",
    role: "Chargeback & Reconciliation Specialist",
    points: [
      "Investigated POS transaction disputes including failed and duplicate debits.",
      "Built Excel templates to validate logs and flag exceptions.",
      "Maintained 99.8% SLA compliance and produced KPI reporting on dispute volume, resolution and financial impact."
    ]
  }
];

const projects = [
  {
    title: "African Tech Job Market Intelligence",
    number: "01",
    tags: ["Excel", "Power BI", "Research"],
    description: "Analysed 160 verified job postings from 129 employers across 13 African countries to identify hiring trends, in-demand skills, tools and employer needs.",
    link: "#contact"
  },
  {
    title: "Startup Partnership Opportunity Scorecard",
    number: "02",
    tags: ["Excel", "Scoring", "BI"],
    description: "Designed a weighted scorecard and funnel framework to assess African technology startups for potential training, internship and industry partnership opportunities.",
    link: "#contact"
  },
  {
    title: "Fintech Reconciliation & Settlement Reporting",
    number: "03",
    tags: ["Excel", "Reconciliation", "KPI"],
    description: "Developed a structured internal reporting approach for settlement and reconciliation work, with emphasis on exceptions, financial impact, controls and operational visibility.",
    link: "#contact"
  }
];

const services = [
  { icon: "▦", title: "Data Analysis & Reporting", text: "Turn operational or business data into clear findings, KPIs and recommendations." },
  { icon: "◫", title: "Power BI & Dashboarding", text: "Build clean, decision-focused dashboards that communicate performance and trends." },
  { icon: "⌁", title: "Analytics Education", text: "Teach practical data analytics concepts and tools through simple, project-based learning." },
  { icon: "◎", title: "Research & Market Intelligence", text: "Collect, validate and analyse market information to uncover opportunities and trends." },
  { icon: "◇", title: "Fintech Data Operations", text: "Support reconciliation, settlement, dispute and exception-analysis workflows." },
  { icon: "↗", title: "Business Insight Support", text: "Translate analysis into practical recommendations for teams and decision-makers." }
];
