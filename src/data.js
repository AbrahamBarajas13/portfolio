// ============================================================
//  EDIT YOUR CONTENT HERE
//  Everything the site displays comes from this file.
//  Change text, add projects, update links — no other files needed.
// ============================================================

export const profile = {
  name: 'Abraham Barajas',
  title: 'Software Engineer',
  location: 'Austin, TX',
  // Short specialty labels shown under your title. Keep to 2–4, no need to repeat "Software Engineer".
  focus: ['Full Stack', 'IoT Systems', 'Cybersecurity'],
  tagline: 'I build and integrate production applications — APIs, IoT systems, and the data pipelines that connect them.',
  summary:
    'Software engineer with 3+ years of experience building and integrating production applications, including RESTful API design, third-party system integrations, and relational and NoSQL data modeling. Skilled at configuring application workflows, mapping data between systems, and troubleshooting integration issues end-to-end. Experienced working directly with stakeholders to translate operational requirements into reliable, maintainable solutions.',
  email: 'abraham_barajas13@hotmail.com',
  github: 'https://github.com/AbrahamBarajas13',
  linkedin: 'https://www.linkedin.com/in/abraham-barajas-6935b3165',
  // Drop your resume PDF into the /public folder and update this path.
  resumeUrl: '/Abraham-Barajas-Resume.pdf',
}

export const skills = [
  {
    category: 'System Integrations & APIs',
    items: [
      'RESTful API Design',
      'API Authentication',
      'Third-Party Integrations',
      'JSON / XML',
      'MQTT',
      'BLE Devices',
    ],
  },
  {
    category: 'Data Mapping & Configuration',
    items: [
      'Schema Design',
      'Data Mapping',
      'Workflow / Permissions',
      'Integration Troubleshooting',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'SQLite', 'SQL'],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES2022+)', 'Python'],
  },
  {
    category: 'Platforms & Tools',
    items: [
      'Node.js',
      'React',
      'React Native',
      'Angular',
      'Git / GitHub',
      'Jira',
      'Agile / Scrum',
      'CI/CD',
      'iOS / Android',
      'Embedded IoT',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'AppSoluteLogic',
    location: 'Remote',
    period: '2022 – Present',
    highlights: [
      'Designed and built RESTful APIs and backend services in Node.js/TypeScript, enabling reliable bidirectional integration between mobile clients and IoT hardware via MQTT.',
      'Configured and maintained system permissions, data models, and workflow logic in MongoDB to support real-time device state, user configuration, and event logging across thousands of daily interactions.',
      'Mapped and validated data exchanged between mobile, backend, and hardware systems, resolving integration and protocol issues to reduce device-pairing failures by 30%.',
      'Owned full feature lifecycle — requirements, configuration, implementation, QA, and release — working directly with stakeholders on operational requirements.',
      'Troubleshot cross-platform integration issues across iOS and Android prior to release, cutting post-release bug reports significantly.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Guinn Partners',
    location: 'Austin, TX',
    period: '2021 – 2022',
    highlights: [
      'Built API integrations connecting frontend interfaces to backend data services, improving data accuracy and system performance.',
      'Collaborated with stakeholders to configure and refine application functionality on short release cycles.',
      'Participated in Agile ceremonies, sprint planning, and retrospectives to maintain predictable delivery.',
    ],
  },
]

export const projects = [
  {
    name: 'Eureka WP — Water Probe App',
    kind: 'Work',
    period: '2024',
    summary:
      'iOS app for Eureka Water Probes’ multi-parameter water-quality instruments. Built the BLE integration layer connecting the app to the probes over Bluetooth Low Energy — device pairing, authentication, live sensor readings, and real-time data sync. Shipped to the App Store.',
    tools: ['React Native', 'TypeScript', 'BLE', 'iOS'],
    link: 'https://apps.apple.com/us/app/eureka-wp/id6738590090',
  },
  {
    name: 'WIGL App',
    kind: 'Work',
    period: '2024',
    summary:
      'Contributed to the WIGL iOS app: repaired and improved the in-app calendar/scheduling and light-settings features, and reworked the CSS across the majority of the app for a cleaner, more consistent interface. Published on the App Store.',
    tools: ['React Native', 'TypeScript', 'CSS', 'iOS'],
    link: 'https://apps.apple.com/us/app/wigl-app/id6738934322',
  },
  {
    name: 'Gel Blaster Analytics Dashboard',
    kind: 'Work',
    period: '2021 – 2022',
    summary:
      'Analytics dashboard for Gel Blaster (built at Guinn Partners) surfacing gameplay data from platform APIs. Visualized usage across game modes, locations, and quantity/time per game as interactive graphs, plus a calendar view for per-day stats with a bar graph and a filterable table for drilling into specifics. Internal company tool — not publicly linkable.',
    tools: ['React', 'JavaScript', 'REST APIs', 'Data Viz'],
    link: null,
  },
  {
    name: 'Library of Congress Web Scraper',
    kind: 'Work',
    period: '2021 – 2022',
    summary:
      'Phase 1 of the AtomAI project (at Guinn Partners): a Node.js scraper that pulls images and their metadata from the Library of Congress by control number, saving the photos locally and compiling structured metadata into JSON for downstream organization. Co-built with a teammate.',
    tools: ['JavaScript', 'Node.js', 'Cheerio', 'Axios'],
    link: 'https://github.com/Jmerc03/webScraping',
  },
  {
    name: 'AtomAI — Tamper-Evident Photo Verification',
    kind: 'Work',
    period: '2021 – 2022',
    summary:
      'R&D project (at Guinn Partners) building on the scraper above: camera-attachment software that stamped each photo with a fingerprint so any alteration — or removal from the storage device — would be detectable. Transfers required approval through a web app that verified a photo was unaltered and issued certifications of proof. The product was ultimately shelved by management, but the work surfaced a lightweight toolset that got the job done.',
    tools: ['Node.js', 'Image Fingerprinting', 'Cryptography', 'R&D'],
    link: null,
  },
  {
    name: 'Bambu Plant — 3D Printer Fleet Dashboard',
    kind: 'Work',
    period: '2022',
    summary:
      'A web dashboard for monitoring a fleet of Bambu Lab X1C 3D printers at a glance, using a playful plant-growth metaphor — each printer is a plant that grows as its print progresses. Surfaces live job status, filament, error codes, and time estimates for 10+ printers over MQTT, with color-coded states. Co-coded with a teammate.',
    tools: ['TypeScript', 'JavaScript', 'Node.js', 'MQTT'],
    link: 'https://github.com/Jmerc03/bambu-plant',
  },
  // ---- Personal projects ----
  {
    name: 'D&D Resource Tracker',
    kind: 'Personal',
    period: '2026',
    summary:
      'A real-time web app for D&D players to track character resources — HP, spell slots, and consumables — and share them with their table. Players sign in with Google, build characters, and join parties via invite codes so the whole group sees live updates. Includes custom theming and an encounter difficulty calculator.',
    tools: ['React', 'Vite', 'Firebase', 'Realtime DB', 'Google Auth'],
    link: 'https://resource-tracker-wheat.vercel.app/',
  },
]

export const education = [
  {
    title: 'Full-Stack Developer Coding Certificate',
    org: 'UT Austin — Center for Professional Education',
    date: 'Sep 2022',
  },
  {
    title: 'Cybersecurity Certificate',
    org: 'Chegg Skills (Thinkful)',
    date: 'Feb 2026',
  },
  {
    title: 'A.A.S. in Biology',
    org: 'Laredo College — Laredo, TX',
    date: '',
  },
]
