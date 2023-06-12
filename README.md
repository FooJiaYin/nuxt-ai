Nuxt AI Template
==================

A template to kickstart full-stack project with OpenAI + Nuxt 3 + Vue 3 + Vuetify + Pinia

Features
--------

- Full Stack Framework: [Nuxt 3](https://nuxt.com/)
- Frontend: [Vue 3](https://vuejs.org/)
- UI Component: [Vuetify](https://vuetifyjs.com/)
- State Management: [Pinia](https://pinia.vuejs.org/)
- GPT API: [OpenAI](https://openai.com/)


Development
-----------

### Prerequisites
1. [Node.js](https://nodejs.org/en/) >= 16.10.0
2. [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Setup
1. `git clone` this repository
2. Install the dependencies:

    ```bash
    # yarn
    yarn install

    # npm
    npm install

    # pnpm
    pnpm install
    ```
3. Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    OPENAI_API_KEY=<your-openai-api-key>
    OPENAI_ORG_ID=<your-openai-org-id>
    ```

### Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev #or
yarn run dev
```

### Production

Build the application for production:

```bash
npm run build #or
yarn run build
```

Locally preview production build:

```bash
npm run preview
```

### Deployment

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Note: Please make sure your deployment platform has sufficient timeout limit for the quiz generation API call. 

For example, free plan of [Vercel](https://vercel.com/) and [Netlify](https://www.netlify.com/) are **not recommended** for this project as they have a 10s timeout limit for serverless functions. The quiz generation process may take longer than 10s. 