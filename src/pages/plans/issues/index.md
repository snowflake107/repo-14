
# Current Issues

Below is a list of the most recent feedback on the current docs.

## From Olena and Dave

<DiscoverBlock width="100%" slots="heading, text"/>

### Feedback

Olena and Dave provided the initial feedback on the documentation: Developers who are new to PWA Studio struggle to find a good starting point for getting familiar with PWA Studio.
Developers see the documentation as incomplete, inconsistent, hard to navigate, and often outdated.

For many developers, all these documentation issues lead to one product-damaging conclusion: "I can't understand PWA Studio — I can't even figure out how to get started — so it must be a shit product."

Olena and Dave provided some common questions from developers:

- *Can you run PWA alongside Luma?*
- *Can you do multi website?*
- *What are the supported deployment models? What are the pros and cons of each?*
- *How to host on bare metal / AWS?*
- *What are the extensibility limitations and workarounds?*

### Action Items

- Add new Getting Started section.
  **This section will be the first and most important section in the new docs.** It will introduce a new topic paradigm—*topics as components*. Just like a react component, a topic will be self-contained. And much like a component, each topic will have two parts: the *concept* and the *keyboard*. The *concept* (the logic) will provide clear, succinct descriptions of the topic (using engaging diagrams when helpful). The *keyboard* (rendering of logic) will provide the practical steps that use the concepts, which immediately reinforces those concepts to make learning quicker and easier. No more navigating to different parts of the docs to piece things together for yourself.
- Identify and update all currently outdated topics and rewrite them in the new topic structure.
- Add a Deployments section to identify and explain all deployment options (with pros and cons). Each deployment option should contain detailed step-by-step instructions.
- Update/add to the current extensibility tutorials to use Targets instead of overrides.
- Add topic about the limitations of targetables.

## From James Calcaben

<DiscoverBlock width="100%" slots="heading, text"/>

### Feedback

 James identified these common questions from developers:

- *How do I add feature `X`? Where `X` is either on the roadmap or doesn't have GraphQL coverage.*
- *How do I deploy to production? We want people to use Adobe Commerce Cloud, but they want a non-Adobe Commerce Cloud solution documented.*
- *How do I customize components and other parts of PWA Studio?*
- *What is the best way to do `X`, when `X` requires working with PWA Studio libraries?*

### Action Items

- Add topic for PWA roadmap
- Add topic for current limitations.
- Add topic for missing GraphQL coverage.
- Add topics to identify, describe, and step developers through the deployment options.
- Add topics to on how-to customize components.
- Add a Best Practices section with topics that cover the various PWA Studio development tasks.

## From Lars Roettig

<DiscoverBlock width="100%" slots="heading, text"/>

### Feedback

 Lars identified the following missing documentation:

- *Clear docs on project setup, with a focus on how to setup PWA-Themes.*
- *Better — more complete — docs on Payments and Shipments.*
- *No documentation for the PWA scaffolding tool.*
  Lars (and other developers) found this to be really frustrating. Our current scaffolding docs are here: https://magento.github.io/pwa-studio/pwa-buildpack/scaffolding/, but he didn't find them useful. And there's no documentation on npm either (https://www.npmjs.com/package/@magento/create-pwa).
- *Offered his own PWA blog posts as source material for learning and adding content to the PWA docs:*
  - Extensibility: https://larsroettig.dev/getting-started-with-pwa-studio-extensibility
  - Checkout: https://larsroettig.dev/demystified-pwa-studio-checkout

### Action Items

- Add / update topic for using the PWA scaffolding tool.
- Add documentation on the public npm package page (https://www.npmjs.com/package/@magento/create-pwa).
- Add scaffolding instructions as part of the Getting Started / Setup topic.
- Review current PWA extensibility topics in the docs in the context of adding How-Tos other tutorials.

## From Chris Brabender

<DiscoverBlock width="100%" slots="heading, text"/>

### Feedback

 Chris identified the following areas for improvement:

- *There's no clear Getting Started section such as, "This is how you start a project and start your customizations. It's more like: here's everything we have, work it out for yourself."*
- *Understanding React Contexts, Reducers, and related constructs is still tricky for many developers.*
- *Advanced customizations — more logic than styling — are largely unknown to developers.*
- *UPWARD is a mystery to most developers.*

### Action Items

- Another vote for a complete new Getting Started section.
  Topics should include how to customize things right up front. Chris's feedback is reinforced by how he presented his PWA 101 webinar — his exercises were focused on navigating the existing Venia app and customizing existing content. This is a good approach to apply to the new Getting Started section for the docs.
- Add topic on usages of React Contexts in PWA Studio.
- Add topic on usages of Reducers in PWA Studio.
- Research and add topics on similar React concepts used in PWA Studio.
- Add topics on Advanced Customizations — customizing/adding logic to components.
- Add / update topic on UPWARD and how to customize it to fit various use cases/needs.
