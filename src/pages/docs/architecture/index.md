# New Docs Architecture

The following outline shows the order and content for the new documentation. This outline will guide our documentation efforts over the next several months. Sections are written in ALL CAPS and correspond to the top-level headings in the left-side navigation. The numbered topics represent the proposed order of topics within that section.

## GETTING STARTED

**1. TOPIC: What is PWA Studio?**

CONCEPTS

- Introduce Studio in the simplest of terms: PWA Studio is a toolkit/library/framework for creating the best PWAs for Adobe Commerce and Magento Open Source sites. The repo's README.md file provides something similar, but the docs do not.
- Show a diagram that introduces the PWA Studio tech stack. The diagram should show how the parts of PWA Studio are connected to each other, how those parts connect to Adobe Commerce (Magento), and how the data flows from Magento to PWA Studio apps to Users in order to provide the best PWAs for Adobe Commerce (Magento).
- The parts / tools within PWA Studio should be briefly described below the diagram, focusing on it's purpose within the Studio framework.

- The third-party technologies — React, GraphQL, UPWARD, Redux — used in the framework should be identified and distinquished from our home-grown PWA Studio code — Venia, Peregrine, Talons, etc.
- Why PWA Studio? Very briefly callout the key advantages of using PWA Studio over other solutions. If the reasons are explicit and compelling enough (after showing how PWA Studio works), then this topic will help set the tone and give developers/partners a reason to invest their time and energy into learning PWA Studio and reading the docs.

KEYBOARD

- Add links to the best 3-4 sites created with PWA Studio and callout at least one compelling area of the site that illustrates the case for using PWA Studio.

**2. TOPIC: Set up PWA Studio**

This is a critically important topic, which could be expanded into a section if needed. As the saying goes, you're only as good as your tools. And when you feel confident that you're using the best tools – on a solid "workbench" (environment) – your motivation grows, your confidence increases, and good feelings carry you into the challenges ahead.

CONCEPTS

- Show a diagram that displays the project structure for the Venia sample app as it would appear in VS Code. Position the project structure in the center surrounded by callouts that describe the setup steps and installed tools required to get the project building and live reloading during development.

- Describe the parts in the diagram with a focus on the development function it provides.

KEYBOARD

- Provide step-by-step instructions for setting up the Venia app as shown in the diagram.
- Include the use or alternate use of using the PWA scaffolding tool to setup a new project.
- Identify, use, and provide examples for when to use the `package.json scripts` provided with the Venia sample project.
- Include a setup validation exercise (via one or more of the scripts) so that all the common setup problems can be fixed before they start development in the first tutorials.

**3. TOPIC: Customize a Studio app**

CONCEPTS

- Identify and describe the various ways to customize components, both styling and logic.

KEYBOARD

- Provide 3-4 short tutorials that show how to customize the Venia app they set up in the setup topic.


**4. TOPIC: Create a Studio app**

Provide step-by-step instructions for creating a PWA that uses some of the basic features/functions of PWA Studio. The emphasis should be on providing an introduction to a basic PWA Studio workflow, with a simple working app at the end.

## Examples

**Examples should be housed in a separate repo dedicated to PWA Studio examples (like the Page Builder examples repo). Each example should:

- Show best-practice usages of PWA Studio features/components and React.
- Provide clear installation and usage instructions.
- Be referenced from the Best Practices section of the docs.

## Components

This section should provide a topic for each Studio component, with deeper documentation that complements the API docs generated from the jsdoc comments.
Each component topic should provide usage examples and whatever else makes sense for a topic that should provide all the information devs want to know about the component.

- Provide conceptual information about Studio components in general. Describe the component's purpose, how it's used, and what it's used for.
- Anatomy of a component [PWA-1902](https://jira.corp.magento.com/browse/PWA-1902)


## How Tos

This section should contain small how-to topics that focus on how to add features to an existing PWA.
The topics should provide instructions that incorporate PWA Studio framework features and components to provide solutions to common PWA development goals.

## Best Practices

This section should provide a kind of checklist/list of best practices consolidated into one place in the docs for easy access and review. Each best practice should be structured as follows:

- Title
- Description
- In-topic code example, if relevant
- One or more links to existing code in PWA Examples repo

## Deployment

This section should provide documentation about the deployment options with pros and cons of each.

## APIs

Houses