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
        title: "Studio Doc Plans",
        path: "/plans/",
      }
    ],
    subPages: [
      {
        title: "Plans",
        path: "/plans/",
        header: false,
        pages: [
          {
            title: "Current Issues",
            path: "/plans/issues/",
          },
          {
            title: "Proposed Solutions",
            path: "/plans/solutions/",
          },
          {
            title: "Action Items / Stories",
            path: "/plans/actionItems/",
          },
        ]
      },
      {
        title: "Getting Started",
        path: "/plans/start/",
        pages: [
          {
            title: "What is PWA Studio?",
            path: "/plans/start/",
          },
          {
            title: "Set up a Studio app",
            path: "/plans/start/setup/",
          },
          {
            title: "Customize a Studio app",
            path: "/plans/start/customize/",
          },
          {
            title: "Create a Studio app",
            path: "/plans/start/create/",
          },
        ],
      },
      {
        title: "Example apps",
        path: "/plans/examples/",
      },
      {
        title: "Release notes",
        path: "/plans/releases/",
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/pwa-studio-doc-plans/'
};
