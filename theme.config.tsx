import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>SmartCampus Mauá Docs</span>,
  
  // project: {
  //   link: 'https://github.com/SmartCampusMaua/smartcampusmaua-nextrav2',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  // footer: {
  //   text: 'Nextra Docs Template',
  // },
  feedback: {
    content: null, // Removes the feedback link

    // content: (
    //   <a
    //     href="https://smartcampus.maua.br/"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Question? Give us feedback →
    //   </a>
    // ),
  },
  editLink: {
    text: null, // Ensures no text is displayed for the edit link
  //   component: ({ filePath }) => (
  //     <a
  //       href={`https://github.com/SmartCampusMaua/smartcampusmaua-nextrav2`}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Edit this page
  //     </a>
  //   ),
  },
}

export default config
