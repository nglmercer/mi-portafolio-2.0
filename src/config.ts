import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'melser.dev',
  subtitle: 'My profile',
  lang: 'es',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
      theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Proyectos',
      url: 'cuatro',     
      external: false,       
      
    },
    {
      name: 'antiguo-port',
      url: 'lastport',     
      external: false,       
      
    },
    {
      name: 'GitHub',
      url: 'https://github.com/nglmercer',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
      
    },
    {
      name: 'nada',
      url: 'dos',     
      external: false,       
      
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/bg-profile.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Melse Rengl',
  bio: 'Editor, creador de contenido, programador y Desarrollador de aplicaciones interactivas. "-ES-JP-ES-"  ',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    // {
    //   name: 'Steam',
    //   icon: 'fa6-brands:steam',
    //   url: 'https://store.steampowered.com',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/nglmercer',
    },
    {
      name: 'Youtube',
      icon: 'bxl:youtube',
      url: 'https://youtube.com/@melserngl',
    },
    {
      name: 'TikTok',
      icon: 'bxl:tiktok',
      url: 'https://tiktok.com/@melserng',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
