---
title: Example Guide
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework


import { Card, CardGrid } from "@astrojs/starlight/components";

## Next steps

<CardGrid>
  <Card title="Update content" icon="pencil">
    Edit `src/content/docs/index.mdx` to see this page change.
  </Card>
  <Card title="Add new content" icon="add-document">
    Add Markdown or MDX files to `src/content/docs` to create new pages.
  </Card>
  <Card title="Configure your site" icon="setting">
    Edit your `sidebar` and other config in `astro.config.mjs`.
  </Card>
  <Card title="Read the docs" icon="open-book">
    Learn more in [the Starlight Docs](https://starlight.astro.build/).
  </Card>
</CardGrid>
