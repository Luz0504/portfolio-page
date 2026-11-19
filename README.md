# Portfolio Website

Personal portfolio website built with **Astro**, featuring projects, graphic design work, illustrations and a contact form.

## Tech Stack

- [Astro](https://astro.build/) – Web framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [React](https://react.dev/) – Interactive components
- [MDX](https://mdxjs.com/) – Content and project pages
- [Supabase](https://supabase.com/) – Database and project content

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v22.12.0 or higher)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Luz0504/portfolio-page.git
```

### 2. Navigate to the project folder

```
cd portfolio-page
```

### 3. Install dependencies

```
npm install
```

### 4. Configure environment variables

The project uses Supabase to retrieve project information.

Create a `.env` file in the root directory and add the following variables:

```
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Replace the placeholder values with your own Supabase project credentials.

**Note:** The application requires these variables to connect to Supabase. Without them, the project may not run or build correctly.

### 5. Start the development server

```
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Commands

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production version in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro` | Runs Astro CLI commands |

## Project Structure
```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Deployment

The website is deployed on [Vercel](https://vercel.com/).

Environment variables must also be configured in the Vercel project settings for production builds.

## Contact

Feel free to explore the portfolio and get in touch through the contact form.

## AI-Assisted Development

ChatGPT wes used as a main tool throughout the development process as a way to explore ideas, solve technical challenges and improve the final result.

Some of the tasks supported by AI included:

- **Code development:** Assistance with writing, reviewing, debugging and optimizing Astro components, layouts and styles.
- **Responsive design:** Refining layouts and adapting components to different screen sizes.
- **Problem solving:** Identifying errors, troubleshooting build issues and improving the overall code structure.
- **Supabase integration:** Assistance with database configuration, environment variables and retrieving dynamic content.
- **Deployment:** Support with GitHub and Vercel configuration and troubleshooting deployment issues.
- **Documentation:** Organizing project information and preparing setup instructions.

AIStudio was another option that was considered for the project, but it didn't work out as expected.

## Graphic Design

Design choices were taken prior to programming, both on Figma and on paper.

- Link to the Figma file (https://www.figma.com/design/dR21ZUCvIJcpVoqsnmwQ2o/Programacion-Final?node-id=0-1&t=nXzmeYpzqmj2bdQm-1)
