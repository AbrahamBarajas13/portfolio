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
    name: 'REST API & Data Integration Layer',
    kind: 'Work',
    period: '2022 – Present',
    summary:
      'Designed and built a RESTful API service consumed by mobile and web clients, with schema-validated data models, role-based access configuration, and structured data mapping between systems.',
    tools: ['Node.js', 'TypeScript', 'MongoDB', 'REST'],
    link: null,
  },
  {
    name: 'BLE IoT Integration Platform',
    kind: 'Work',
    period: '2022 – Present',
    summary:
      'Built an event-driven MQTT integration layer connecting mobile applications to BLE-enabled hardware, handling authentication, data translation, and real-time sync with sub-200ms round trips.',
    tools: ['React Native', 'TypeScript', 'MQTT', 'BLE'],
    link: null,
  },
  // ---- Personal projects ----
  {
    name: 'D&D Resource Tracker',
    kind: 'Personal',
    period: '2026',
    summary:
      'A real-time web app for D&D players to track character resources — HP, spell slots, and consumables — and share them with their table. Players sign in with Google, build characters, and join parties via invite codes so the whole group sees live updates. Includes custom theming and an encounter difficulty calculator.',
    tools: ['React', 'Vite', 'Firebase', 'Realtime DB', 'Google Auth'],
    link: 'https://github.com/AbrahamBarajas13/resource-tracker',
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
