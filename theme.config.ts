import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'GeoConsultant',
  id: 'julio-collazos-geospatial',
  logo: logoImage,
  seo: {
    title: 'GeoConsultant — Geospatial Analysis & Environmental Intelligence',
    description:
      'Personal blog and portfolio of Julio Collazos. Offering specialized geospatial consulting, environmental intelligence, and data-driven sustainability solutions.',
    author: 'Julio Collazos',
    image: previewImage,
  },
  colors: {
    primary: '#2d6a4f',
    secondary: '#52b788',
    neutral: '#8d99ae',
    outline: '#1b4332',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Projects',
        href: '/projects',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to LinkedIn profile, opens in new tab',
        href: 'https://linkedin.com/in/julio-collazos',
        icon: 'lucide:linkedin',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/julio-collazos',
      icon: 'lucide:github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/julio-collazos',
      icon: 'lucide:linkedin',
    },
  ],
})
