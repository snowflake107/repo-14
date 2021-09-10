/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: "Studio Docs Plan",
        path: "/docs/",
      },
      {
        title: "Getting Started",
        path: "/start/",
      },
      {
        title: "Examples",
        path: "/examples/",
      },
      {
        title: "Components",
        path: "/components/",
      },
      {
        title: "Hooks",
        path: "/hooks/",
      },
      {
        title: "Tutorials",
        path: "/tutorials/",
      },
      {
        title: "API Reference",
        path: "/api/",
      },
    ],
    subPages: [
      {
        title: "Studio Docs Plan",
        path: "/docs/",
        header: true,
        pages: [
          {
            title: "Documentation Issues",
            path: "/docs/issues/",
          },
          {
            title: "Documentation Solutions",
            path: "/docs/solutions/",
          },
        ]
      },
      {
        title: "Getting Started",
        path: "/start/",
        header: true,
        pages: [
          {
            title: "What is PWA Studio?",
            path: "/start/",
          },
          {
            title: "Set up a Studio app",
            path: "/start/setup/",
          },
          {
            title: "Customize a Studio app",
            path: "/start/customize/",
          },
          {
            title: "Create a Studio app",
            path: "/start/create/",
          },
        ]
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/pwa-studio-doc-plans/'
};
