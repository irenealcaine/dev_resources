export const categories = [
  {
    id: '1',
    name: 'Frontend',
    slug: 'frontend',
    description: 'Frameworks, librerías y herramientas para desarrollo frontend',
    icon: '🎨'
  },
  {
    id: '2',
    name: 'Backend',
    slug: 'backend',
    description: 'APIs, bases de datos y servicios del lado del servidor',
    icon: '⚙️'
  },
  {
    id: '3',
    name: 'DevOps',
    slug: 'devops',
    description: 'Herramientas de CI/CD, contenedores y deployment',
    icon: '🚀'
  },
  {
    id: '4',
    name: 'Diseño',
    slug: 'design',
    description: 'Recursos de UI/UX, iconos y herramientas de diseño',
    icon: '✨'
  },
  {
    id: '5',
    name: 'Aprendizaje',
    slug: 'learning',
    description: 'Tutoriales, cursos y documentación',
    icon: '📚'
  }
];

export const resources = [
  {
    id: '1',
    title: 'React Documentation',
    description: 'Documentación oficial de React con guías completas, API reference y ejemplos interactivos para aprender React desde cero.',
    url: 'https://react.dev',
    categoryId: '1',
    tags: ['react', 'javascript', 'docs'],
    isFree: true,
    rating: 4.9,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Tailwind CSS',
    description: 'Framework de CSS utility-first para construir interfaces modernas rápidamente sin salir del HTML.',
    url: 'https://tailwindcss.com',
    categoryId: '1',
    tags: ['css', 'styling', 'framework'],
    isFree: true,
    rating: 4.8,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Next.js',
    description: 'Framework de React para producción con SSR, SSG, routing y más características out-of-the-box.',
    url: 'https://nextjs.org',
    categoryId: '1',
    tags: ['react', 'framework', 'fullstack'],
    isFree: true,
    rating: 4.9,
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Node.js',
    description: 'Runtime de JavaScript construido sobre el motor V8 de Chrome para ejecutar JavaScript en el servidor.',
    url: 'https://nodejs.org',
    categoryId: '2',
    tags: ['javascript', 'backend', 'runtime'],
    isFree: true,
    rating: 4.8,
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'PostgreSQL',
    description: 'Base de datos relacional open source con más de 30 años de desarrollo activo y gran fiabilidad.',
    url: 'https://www.postgresql.org',
    categoryId: '2',
    tags: ['database', 'sql', 'open-source'],
    isFree: true,
    rating: 4.7,
    createdAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Docker',
    description: 'Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.',
    url: 'https://www.docker.com',
    categoryId: '3',
    tags: ['containers', 'devops', 'deployment'],
    isFree: true,
    rating: 4.8,
    createdAt: '2024-01-10'
  },
  {
    id: '7',
    title: 'GitHub Actions',
    description: 'Automatización de workflows de CI/CD directamente desde GitHub con runners y acciones personalizables.',
    url: 'https://github.com/features/actions',
    categoryId: '3',
    tags: ['ci-cd', 'automation', 'github'],
    isFree: true,
    rating: 4.6,
    createdAt: '2024-01-09'
  },
  {
    id: '8',
    title: 'Figma',
    description: 'Herramienta de diseño colaborativo basada en navegador para crear interfaces, prototipos y sistemas de diseño.',
    url: 'https://www.figma.com',
    categoryId: '4',
    tags: ['design', 'ui-ux', 'prototyping'],
    isFree: true,
    rating: 4.9,
    createdAt: '2024-01-08'
  },
  {
    id: '9',
    title: 'Lucide Icons',
    description: 'Biblioteca de iconos hermosos y consistentes, fork mejorado de Feather Icons con más variedad.',
    url: 'https://lucide.dev',
    categoryId: '4',
    tags: ['icons', 'design', 'ui'],
    isFree: true,
    rating: 4.7,
    createdAt: '2024-01-07'
  },
  {
    id: '10',
    title: 'MDN Web Docs',
    description: 'Documentación completa sobre tecnologías web incluyendo HTML, CSS, JavaScript y APIs del navegador.',
    url: 'https://developer.mozilla.org',
    categoryId: '5',
    tags: ['docs', 'learning', 'web'],
    isFree: true,
    rating: 4.9,
    createdAt: '2024-01-06'
  },
  {
    id: '11',
    title: 'FreeCodeCamp',
    description: 'Plataforma gratuita de aprendizaje con cursos interactivos de desarrollo web, algoritmos y más.',
    url: 'https://www.freecodecamp.org',
    categoryId: '5',
    tags: ['learning', 'courses', 'free'],
    isFree: true,
    rating: 4.8,
    createdAt: '2024-01-05'
  },
  {
    id: '12',
    title: 'Astro',
    description: 'Framework web moderno para crear sitios rápidos enfocados en contenido con cualquier framework UI.',
    url: 'https://astro.build',
    categoryId: '1',
    tags: ['framework', 'static-site', 'performance'],
    isFree: true,
    rating: 4.8,
    createdAt: '2024-01-04'
  }
];