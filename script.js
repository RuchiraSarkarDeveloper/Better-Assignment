const featuresData = [
  {
    name: 'Adaptive Workflows',
    description: 'AI routes tasks, approvals, and alerts based on context to keep teams aligned.',
    icon: '⚡',
    category: 'Automation'
  },
  {
    name: 'Code-Aware Actions',
    description: 'Deploy, test, and roll back from a single command center with built-in guardrails.',
    icon: '🛠️',
    category: 'DevOps'
  },
  {
    name: 'Team Insights',
    description: 'Live timelines and health scores for every workflow with proactive nudges.',
    icon: '📊',
    category: 'Visibility'
  },
  {
    name: 'Incident Playbooks',
    description: 'Standardize on-call steps, alerts, and approvals with reusable runbooks.',
    icon: '🛡️',
    category: 'Reliability'
  }
];

const stepsData = [
  { title: 'Capture', description: 'Connect repos, chat, and CI/CD in minutes with guided setup.' },
  { title: 'Automate', description: 'Drag-and-drop steps or let AI suggest the flow to reduce toil.' },
  { title: 'Ship', description: 'Run, monitor, and recover with built-in guardrails and alerts.' }
];

const useCaseData = [
  { title: 'Developers', description: 'Automate PR checks, preview deploys, and incident runbooks.', category: 'Engineering' },
  { title: 'Founders', description: 'See pipeline health, unblock teams, and ship without chaos.', category: 'Leadership' },
  { title: 'Remote Teams', description: 'Asynchronous handoffs with alerts where work happens.', category: 'Collaboration' },
  { title: 'Ops', description: 'Standardize playbooks, enforce SLAs, and reduce toil.', category: 'Operations' }
];

const testimonialsData = [
  {
    name: 'Priya Desai',
    role: 'VP Engineering',
    company: 'LaunchPad',
    quote: 'NovaFlow cut our release coordination time by 40% and incidents by 30%.',
    avatar: 'https://dummyimage.com/80x80/6c5ce7/ffffff&text=PD'
  },
  {
    name: 'Aaron Smith',
    role: 'CTO',
    company: 'Northwind',
    quote: 'From PR checks to rollbacks, everything is automated and auditable.',
    avatar: 'https://dummyimage.com/80x80/6c5ce7/ffffff&text=AS'
  },
  {
    name: 'Maya Lin',
    role: 'Head of Ops',
    company: 'SignalOps',
    quote: 'Runbooks are now living workflows with real-time ownership and alerts.',
    avatar: 'https://dummyimage.com/80x80/6c5ce7/ffffff&text=ML'
  }
];

const faqData = [
  {
    question: 'How does NovaFlow integrate with our stack?',
    answer: 'Connect Git providers, CI/CD, chat, and issue trackers via secure OAuth and scoped tokens.'
  },
  {
    question: 'What’s the security model and data handling?',
    answer: 'SSO, audit logs, role-based access, and data encryption in transit and at rest.'
  },
  {
    question: 'Can non-technical teams build workflows?',
    answer: 'Yes, the canvas and templates are no-code; guardrails prevent unsafe changes.'
  },
  {
    question: 'Do you support on-call and incident playbooks?',
    answer: 'Prebuilt playbooks include ownership, escalations, and comms channels with SLAs.'
  },
  {
    question: 'How do seats and roles work?',
    answer: 'Assign roles per workspace; granular permissions for runs, templates, and settings.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Start free with core features; upgrade to Scale for SSO, audit logs, and priority support.'
  }
];

function createFeatureCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card__icon" aria-hidden="true">${item.icon}</div>
    <h3>${item.name}</h3>
    <p class="card__meta">${item.description}</p>
    <p class="card__meta">Category: ${item.category}</p>
  `;
  return card;
}

function createStep(item, index) {
  const step = document.createElement('article');
  step.className = 'step';
  step.innerHTML = `
    <div class="step__badge" aria-hidden="true">${index + 1}</div>
    <h3>${item.title}</h3>
    <p class="card__meta">${item.description}</p>
  `;
  return step;
}

function createUseCase(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <p class="eyebrow">${item.category}</p>
    <h3>${item.title}</h3>
    <p class="card__meta">${item.description}</p>
  `;
  return card;
}

function createTestimonial(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="testimonial__head">
      <img src="${item.avatar}" alt="Avatar of ${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p class="card__meta">${item.role} · ${item.company}</p>
      </div>
    </div>
    <p class="card__meta">“${item.quote}”</p>
  `;
  return card;
}

function createFaq(item) {
  const details = document.createElement('details');
  details.innerHTML = `
    <summary><h3>${item.question}</h3></summary>
    <p>${item.answer}</p>
  `;
  return details;
}

function renderCMS() {
  const featureTarget = document.querySelector('[data-cms="features"]');
  const stepTarget = document.querySelector('[data-cms="steps"]');
  const useCaseTarget = document.querySelector('[data-cms="usecases"]');
  const testimonialTarget = document.querySelector('[data-cms="testimonials"]');
  const faqTarget = document.querySelector('[data-cms="faq"]');

  if (featureTarget) {
    featuresData.forEach(item => featureTarget.appendChild(createFeatureCard(item)));
  }

  if (stepTarget) {
    stepsData.forEach((item, idx) => stepTarget.appendChild(createStep(item, idx)));
  }

  if (useCaseTarget) {
    useCaseData.forEach(item => useCaseTarget.appendChild(createUseCase(item)));
  }

  if (testimonialTarget) {
    testimonialsData.forEach(item => testimonialTarget.appendChild(createTestimonial(item)));
  }

  if (faqTarget) {
    faqData.forEach(item => faqTarget.appendChild(createFaq(item)));
  }
}

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function setupMobileNav() {
  const menuBtn = document.querySelector('.nav__menu');
  const drawer = document.querySelector('[data-mobile-drawer]');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCMS();
  setYear();
  setupMobileNav();
});
