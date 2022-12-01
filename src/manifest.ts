import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'OCS Keyboard Extension',
  description: '',
  version: '0.0.0',
  manifest_version: 3,
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  // action: {
  //   default_popup: '',
  //   default_icon: 'img/logo-48.png',
  // },
  // options_page: '',
  // background: {
  //   service_worker: '',
  //   type: 'module',
  // },
  content_scripts: [
    {
      matches: ['https://www.ocs.fr/*', 'https://ocs.fr/*'],
      js: ['src/content/index.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  permissions: [],
})
