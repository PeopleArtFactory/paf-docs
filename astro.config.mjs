import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.peopleartfactory.com',
  vite: {
    ssr: {
      noExternal: ['paf-viewer'],
    }
  },
  integrations: [
    starlight({
      title: "Docs with Tailwind",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: {
            es: "Primeros pasos",
          },
		  autogenerate: { directory: "getting-started" },
        },

        {
          label: "Guides",
          translations: {
            es: "Guías",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Developer's reference",
          translations: {
            es: "Referencia para desarrolladores",
          },
          autogenerate: { directory: "developers" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
