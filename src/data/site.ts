// Single source for site-wide facts and the service content.
// Anything in [square brackets] is a fact we don't have yet. Fill before launch.

export const site = {
  name: 'Blueforge',
  // Company facts shown in the footer, on Contact and About, and in the legal pages.
  domain: 'blueforgedigital.net',
  email: 'hello@blueforgedigital.net',
  phone: '+1-814-801-3627',
  phoneDisplay: '+1 (814) 801-3627',
  // Principal office on the Wyoming Secretary of State record.
  address: {
    street: '30 N Gould St Ste N',
    city: 'Sheridan',
    region: 'WY',
    postal: '82801',
    country: 'US',
  },
  // Optional form endpoint (Formspree, Basin, your own API). Empty = the form opens the visitor's email app.
  formEndpoint: '',
  cta: 'Talk to an engineer',
  ctaNote: "30 minutes. Bring the problem, and we'll tell you whether we're the right shop for it.",
  nav: [
    { href: '/services/', label: 'Services' },
    { href: '/process/', label: 'Process' },
    { href: '/engagements/', label: 'Engagements' },
    { href: '/insights/', label: 'Insights' },
    { href: '/about/', label: 'About' },
  ],
  company: [
    { href: '/about/', label: 'About' },
    { href: '/process/', label: 'Process' },
    { href: '/engagements/', label: 'Engagements' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy/', label: 'Privacy' },
    { href: '/terms/', label: 'Terms' },
  ],
  // Legal pages stay out of search and the sitemap until the bracketed company facts are filled and reviewed.
  legalReady: true,
  legalEntity: 'Blueforge Digital LLC',
  legalAddress: '30 N Gould St Ste N, Sheridan, WY 82801, USA',
  jurisdiction: 'the State of Wyoming',
  legalUpdated: '28 September 2026',
  byline: 'The Blueforge team',
};

// Real steel temper colours. Steel is reheated after hardening, and the oxide film on its
// surface shifts from straw to blue as the temperature climbs. Blue is where it turns tough.
export const temper = [
  { name: 'Pale straw', temp: '220°C', color: '#ecd98f' },
  { name: 'Straw', temp: '240°C', color: '#dcae52' },
  { name: 'Brown', temp: '260°C', color: '#a0633a' },
  { name: 'Purple', temp: '280°C', color: '#70428a' },
  { name: 'Dark blue', temp: '295°C', color: '#2b3a96' },
  { name: 'Light blue', temp: '310°C', color: '#4a7fd1' },
];

export type Faq = { q: string; a: string };

export type Service = {
  // `id` is used for the contact form prefill (?need=), `slug` for the page URL.
  id: string;
  slug: string;
  forWho: string;
  signs: string[];
  // How each of the four stages applies to this service, in stage order.
  stagesFor: string[];
  faqs: Faq[];
  name: string;
  purpose: string;
  intro: string;
  delivers: string[];
  handover: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: 'software',
    slug: 'software-development',
    forWho: "For operations and IT leaders whose business runs on a system that has to keep working: order flows, portals, the integrations around an ERP.",
    signs: [
      "A system your operation depends on is maintained by one person, or by nobody.",
      "A supplier built something, left, and took the knowledge with them.",
      "Releases are rare, because every one of them is frightening.",
      "A rebuild is on the table, and you need to be sure this one lasts.",
    ],
    stagesFor: [
      "We read the existing code and data, map every system it touches, and write down what has to keep running during the change.",
      "Working releases every two weeks in a production-like environment, with tests written alongside the code.",
      "Load tests against your real volumes, a security review, and a rehearsed rollback.",
      "Monitoring, patching and small improvements under a service agreement, or a full handover to your team.",
    ],
    faqs: [
      { q: "Will you work with our existing code, or do you insist on a rebuild?", a: "We start with what you have. The assay tells you which parts are sound, which need work and which should go, with the reasoning. We recommend a rebuild only when keeping the old system costs more than replacing it." },
      { q: "Which technologies do you use?", a: "Mainstream, well-supported ones that your own team or another supplier could take over. [Preferred stack is confirmed before launch]. If you have standards, we follow them." },
      { q: "Can you take over a system another supplier built?", a: "Yes. It starts with an assay of the code and infrastructure, so both sides know what we're taking on." },
    ],
    name: 'Software development',
    purpose: 'Internal systems, customer portals and integrations that your operations depend on daily.',
    intro:
      "We build the systems a company runs on: order flows, portals, the glue between an ERP and everything around it. It gets used hard, so we build it to be maintained by whoever comes after us.",
    delivers: [
      'Architecture written down before the build, with the trade-offs named.',
      'Web applications, APIs and integrations with your ERP, CRM and finance systems.',
      'Automated tests, staged releases and a rollback plan for every deploy.',
      'Monitoring and alerts wired in before launch.',
      'Documentation a new engineer can follow on their first day.',
    ],
    handover: 'Source code, infrastructure scripts, runbooks and every account, all in your name.',
    duration: '3 to 9 months to first production release',
  },
  {
    id: 'ai-implementation',
    slug: 'ai-implementation',
    forWho: "For teams with an AI pilot that worked in a demo and now has to work every day, on real data, with someone accountable for it.",
    signs: [
      "The pilot impressed everyone, and nobody can say how accurate it is.",
      "There's no plan for what happens when the model gets one wrong.",
      "Cost per task is unknown, and the usage bill is starting to get noticed.",
      "Security or legal has questions about the data, and the answers aren't written down.",
    ],
    stagesFor: [
      "We build a test set from your real cases and measure what the pilot gets right today.",
      "We build the production pipeline: inputs, guardrails, human review steps, logging and cost tracking.",
      "We test against the hard cases, try to break it on purpose, and hold it to an accuracy bar agreed in advance.",
      "We watch accuracy and cost over time, and re-test whenever the model or your data changes.",
    ],
    faqs: [
      { q: "Which models do you use?", a: "The one that meets your accuracy, cost and data requirements. We build so it can be swapped, because the best option this year may not be the best one next year." },
      { q: "Where does our data go?", a: "That is decided and written down in the assay: what may leave your environment, what may not, and which vendor terms apply. The system is then built to enforce it." },
      { q: "How do you measure accuracy?", a: "Against a test set of your own real cases with agreed right answers, run before launch and again after every change." },
    ],
    name: 'AI implementation',
    purpose: 'AI that runs inside production systems, with logging, fallbacks and a person in the loop where it matters.',
    intro:
      "A demo that works on ten examples is the easy part. We build the rest: evaluation against your own data, guardrails, cost controls, and a fallback for the day the model gets it wrong.",
    delivers: [
      'A test set built from your real cases, so accuracy is a measured number.',
      'Document processing, assistants and decision support built into the systems you already run.',
      'Human review steps wherever a wrong answer costs money or trust.',
      'Logging of every model decision, with cost per task tracked.',
      'A model-swap path, so you are not tied to one vendor.',
    ],
    handover: 'Evaluation suite, prompts, pipelines, cost dashboard and an operating manual.',
    duration: '2 to 5 months to production',
  },
  {
    id: 'ai-consulting',
    slug: 'ai-consulting',
    forWho: "For boards and leadership teams who need to decide where AI is worth the investment, with the engineering cost on the table.",
    signs: [
      "The board is asking for an AI plan, and you want one that survives scrutiny.",
      "Vendors are pitching, and you have no independent way to judge them.",
      "Several departments have started their own experiments.",
      "You suspect your data isn't ready, and want to know how far off it is.",
    ],
    stagesFor: [
      "This service is an assay: interviews, a review of systems and data, and a scored register of use cases.",
      "Where it helps the decision, we build one small prototype on your data.",
      "We test the recommendations with your security, legal and finance leads before they reach the board.",
      "A quarterly review of the roadmap, if you want one.",
    ],
    faqs: [
      { q: "Are you tied to any vendor?", a: "No. We don't resell software and we don't take referral fees." },
      { q: "What do we receive at the end?", a: "An assessment report, a scored register of use cases, a build-or-buy recommendation for each, and a 12-month roadmap with budgets." },
      { q: "What if you conclude we shouldn't build anything yet?", a: "Then the report says so, and sets out what would need to change first. That is a legitimate result of an assay." },
    ],
    name: 'AI consulting',
    purpose: 'A board-ready view of where AI pays back in your operation, with the engineering cost attached.',
    intro:
      "Our consultants are the engineers who would build the thing, so every recommendation comes with a build estimate. Expect some of your ideas to come back marked not worth it.",
    delivers: [
      'A review of your processes, data and systems, done on site with your teams.',
      'Use cases scored on payback, feasibility, data readiness and risk.',
      'A security and compliance position your legal team can work with.',
      'A build-or-buy recommendation for each use case.',
      'A 12-month roadmap with budgets, written for the board.',
    ],
    handover: 'Assessment report, scored use-case register and roadmap.',
    duration: '4 to 8 weeks',
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    forWho: "For B2B companies with long sales cycles, where marketing has to answer for pipeline and revenue.",
    signs: [
      "Marketing reports leads, sales reports revenue, and nobody can join the two.",
      "Your website is slow, hard to update, or both.",
      "Leads travel from a form to the CRM through steps nobody fully understands.",
      "Budget decisions rest on last-click numbers, because nothing better exists.",
    ],
    stagesFor: [
      "We audit tracking, CRM data and the path from first click to signed contract.",
      "We build attribution first, then the campaigns and pages that run on it.",
      "We test every form, tag and integration end to end, and reconcile the numbers against finance.",
      "Monthly operation and reporting that starts with pipeline and revenue.",
    ],
    faqs: [
      { q: "Do you only work with B2B companies?", a: "That's where our approach fits best: considered purchases, long cycles, a CRM at the centre. For quick consumer sales, another shop will serve you better." },
      { q: "Who owns the ad accounts and data?", a: "You do. Everything is set up in your name from the start." },
      { q: "How soon will we see results?", a: "Measurement is in place within six to eight weeks. What the campaigns return after that depends on your market and your sales cycle, and you'll see the numbers either way." },
    ],
    name: 'Digital marketing',
    purpose: 'Demand generation built like the rest of our work: measured end to end, from first click to signed contract.',
    intro:
      "We treat marketing as a system with inputs and outputs. The first job is always measurement down to revenue. Spend decisions come after that.",
    delivers: [
      'Attribution that follows a lead from first click to closed revenue in your CRM.',
      'Search, paid media and account-based campaigns for long B2B sales cycles.',
      'Websites and landing pages engineered for speed, accessibility and conversion.',
      'Marketing automation connected properly to sales.',
      'A monthly report that starts with pipeline and revenue.',
    ],
    handover: 'Ad accounts, analytics, dashboards and campaign playbooks, all in your name.',
    duration: 'Set-up in 6 to 8 weeks, then ongoing',
  },
];

export type Stage = {
  id: string;
  name: string;
  forge: string;
  summary: string;
  detail: string;
  outputs: string[];
  // Bar colour on the dark ground (brightening) and on light paper (deepening).
  color: string;
  colorOnLight: string;
};

// The four stages of an engagement. This is a true sequence, so it is numbered.
// Each stage sits one step further along a blue ramp.
export const stages: Stage[] = [
  {
    id: 'assay',
    name: 'Assay',
    forge: 'A smith tests the metal before it goes near the fire.',
    summary: 'We examine what you have: systems, data, team and constraints.',
    detail:
      "Two to four weeks on site and in your systems. We read the code, query the data and talk to the people who use it. You get a written assessment and a fixed-scope plan. If the plan is 'don't build this', we say that.",
    outputs: ['Written assessment', 'Architecture proposal', 'Fixed-scope plan and budget'],
    color: '#2f5cf0',
    colorOnLight: '#8db4ff',
  },
  {
    id: 'forge',
    name: 'Forge',
    forge: 'Heat and hammer. The shape gets made here.',
    summary: 'We build in two-week increments, with a working release at the end of each one.',
    detail:
      'Your team sees a working release every two weeks, in an environment that mirrors production. Every trade-off goes into the decision log as it is made.',
    outputs: ['Working release every two weeks', 'Test suite that grows with the code', 'Decision log'],
    color: '#5a86ff',
    colorOnLight: '#5a86ff',
  },
  {
    id: 'temper',
    name: 'Temper',
    forge: 'Hardened steel is brittle. Tempering is what makes it tough.',
    summary: 'We harden the system before launch: load, security, failure and recovery.',
    detail:
      "It's the easiest stage to cut when a deadline is close, and we don't cut it. We load-test, run a security review, break things on purpose and rehearse the recovery. Launch happens when the system passes, and the pass criteria are agreed in advance.",
    outputs: ['Load and failure test results', 'Security review', 'Runbooks and rehearsed recovery'],
    color: '#8db4ff',
    colorOnLight: '#2f5cf0',
  },
  {
    id: 'service',
    name: 'Service',
    forge: 'A good tool gets maintained. It stays in use for decades.',
    summary: 'We run and maintain what we built, or hand it to your team with everything they need.',
    detail:
      'Choose a service agreement with agreed response times, or a full handover. Either way the code, the accounts and the documentation are yours from the first day.',
    outputs: ['Service agreement or full handover', 'Monitoring and monthly health report', 'Quarterly improvement plan'],
    color: '#dbe7ff',
    colorOnLight: '#0f2260',
  },
];

export const ownership = [
  { h: 'Source code', t: 'In your repository from the first commit, with full history.' },
  { h: 'Infrastructure', t: 'Running in your cloud accounts, defined in scripts you can read.' },
  { h: 'Documentation', t: 'Architecture, runbooks and a decision log that explains why, as well as what.' },
  { h: 'Accounts and data', t: 'Every licence, ad account and dataset registered to you.' },
];

export const fit = {
  good: [
    'You run an established business and the system in question matters to daily operations.',
    'A pilot or prototype worked, and now it has to survive real users and real data.',
    'You need one accountable team across software, AI and the marketing systems connected to them.',
    'You expect to be running this in five years and want it built that way.',
  ],
  poor: [
    'You need a throwaway prototype by next week.',
    'The budget only covers the build, with nothing for testing or upkeep.',
    'You want a vendor to take instructions without questioning them.',
  ],
};

export const engagements = [
  {
    name: 'Assay',
    length: 'Two to eight weeks',
    price: '[Assay price is confirmed before launch]',
    bestFor: 'Every engagement starts here.',
    includes: [
      'A review of code, data and systems, done with your team.',
      'A written assessment and an architecture proposal.',
      'A fixed-scope plan and budget for the build.',
      'The findings are yours to keep, and to take elsewhere if you choose.',
    ],
  },
  {
    name: 'Build',
    length: 'Two to nine months',
    price: '[Build pricing model is confirmed before launch]',
    bestFor: 'Building or rebuilding a system to production standard.',
    includes: [
      'Scope, budget and pass criteria agreed after the assay.',
      'A working release every two weeks.',
      'The temper stage: load, security, failure and recovery testing.',
      'Every change gets a written note with its cost, approved before work starts.',
    ],
  },
  {
    name: 'Service agreement',
    length: 'Twelve months, renewable',
    price: '[Service agreement pricing is confirmed before launch]',
    bestFor: 'Keeping a production system healthy after launch.',
    includes: [
      'Monitoring, with agreed response times. [Response times are confirmed before launch].',
      'Security patching and dependency updates.',
      'A monthly health report.',
      'A quarterly improvement plan, with a set allowance of engineering days.',
    ],
  },
];

export const commercialTerms = [
  { h: 'The assay is fixed price.', t: 'You know the cost before we start, and the findings are yours whatever you decide next.' },
  { h: 'Build budgets come from the assay.', t: "We quote once we've seen the system. Before that, any number would be a guess." },
  { h: 'Third-party costs are yours, at cost.', t: 'Cloud, licences and model usage are billed to your own accounts. We add no margin.' },
  { h: 'Invoicing and notice.', t: '[Invoicing terms and notice periods are confirmed before launch].' },
];

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: 'Working with us',
    items: [
      { q: 'Who will we deal with day to day?', a: "The senior engineer leading your project. They write code on it, and they're the person in your review meetings." },
      { q: 'Do you work on site?', a: "During the assay, yes, because it's faster to sit with the people who use the system. During the build we work remotely, with regular sessions together. Blueforge Digital LLC is registered in Sheridan, Wyoming." },
      { q: 'Can you work with our in-house team?', a: 'Yes. We work in your repositories and follow your review and release process where you have one.' },
      { q: 'How big a project do you take on?', a: "[Typical project size is confirmed before launch]. If yours is too small to need this level of rigour, we'll tell you." },
    ],
  },
  {
    title: 'Cost and contracts',
    items: [
      { q: 'How do you price?', a: 'The assay is fixed price. The build is quoted after the assay, against a scope and pass criteria we agree together. The engagements page explains each one.' },
      { q: 'What if the scope changes?', a: "It will. Each change gets a short written note with its effect on cost and dates, and nothing starts until you've approved it." },
      { q: 'Do you mark up cloud or licence costs?', a: "No. They're billed to your own accounts." },
    ],
  },
  {
    title: 'Ownership and handover',
    items: [
      { q: 'Who owns the code?', a: 'You do, from the first commit, in your own repository.' },
      { q: 'What do we get at handover?', a: 'Source code, infrastructure scripts, architecture documents, runbooks, the decision log and every account, all in your name.' },
      { q: 'What if we want to move to another supplier?', a: 'You can. The documentation is written so a competent team can take over without calling us.' },
    ],
  },
  {
    title: 'Security and AI',
    items: [
      { q: 'How do you handle access to our systems?', a: 'Named accounts, the least access the work needs, and everything revoked at the end. [Security certifications are listed here once confirmed].' },
      { q: 'Is our data used to train AI models?', a: 'Not by us. The vendor settings and contract terms that prevent it are checked in the assay and documented.' },
      { q: 'Do you sign NDAs and data processing agreements?', a: 'Yes, before we see anything sensitive.' },
    ],
  },
];
