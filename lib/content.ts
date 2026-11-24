// Profile source: Upwork, read 2026-11-16. Employment dates supplied directly by Patrick in chat.
export const profile = {
  name: 'Patrick Lai',
  upwork: 'https://www.upwork.com/freelancers/~01f362eba5eb38d117',
  github: 'https://github.com/patricklai8715',
  email: 'pakilai0715@gmail.com',
};
export const experiences = [
  { period: 'September 2025 - Present', company: 'Freelance', role: 'Freelance Web Developer', description: 'Full-stack web applications with responsive interfaces, backend APIs, databases, access control, testing, and deployment.' },
  { period: 'September 2021 - September 2025', company: 'JD', role: 'Front-End Developer', description: 'Front-end engineering experience at JD, working on established products.' },
  { period: 'August 2019 - September 2021', company: 'SHEIN', role: 'Front-End Developer', description: 'Front-end engineering experience at SHEIN. My portfolio includes its global e-commerce experience for desktop and PWA.' },
  { period: 'July 2015 - August 2019', company: 'uCloudlink', role: 'Front-End Developer', description: 'Previous front-end development role at uCloudlink.' },
];
export const gallery: {title:string; image?:string; tags:string[]}[] = [
  { title: 'SHEIN Global Fast-fashion E-commerce (PC & PWA)', image: '/images/shein.jpg', tags: ['Vue.js', 'Node.js', 'ExpressJS', 'SCSS'] },
  { title: 'Human Resources Management System', image: '/images/hr-management.jpg', tags: ['React', 'Next.js', 'OpenAPI', 'Tailwind CSS'] },
  { title: 'Customer Relationship Management System', image: '/images/crm.jpg', tags: ['React', 'Tailwind CSS', 'Next.js', 'PostgreSQL'] },
];
export const stack = [
  { group: '01 / FRONTEND', title: 'Frontend', items: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'], symbol: '</>' },
  { group: '02 / BACKEND', title: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Express'], symbol: '{ }' },
  { group: '03 / DATA AND DELIVERY', title: 'Data And Delivery', items: ['Cloudflare D1', 'Database Migrations', 'Testing', 'Cloudflare Deployment'], symbol: '▤' },
];
export const steps = [
  { title: 'Discovery', text: 'We define the user flows, features, data requirements, and acceptance criteria before agreeing on scope and milestones.' },
  { title: 'Build', text: 'I develop the interface, APIs, database, and access controls in milestones. You review working previews and give feedback as each part is ready.' },
  { title: 'Quality', text: 'I test the core business workflows, API behavior, and access controls, and check the interface across browsers and screen sizes.' },
  { title: 'Delivery', text: 'I deploy the application and hand over the code, configuration, and setup documentation so you can run and maintain it.' },
];
