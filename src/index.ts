import { generatorHandler } from '@prisma/generator-helper';

import { generate } from './generate';
import { remove, update } from './generator-pipelines';

generatorHandler({
  async onGenerate(options) {
    const project = await generate(options);
    await remove(project, options);
    await update(project, options);
  },
  onManifest() {
    return {
      defaultOutput: '.',
      prettyName: 'Prisma NestJS/GraphQL',
      requiresGenerators: ['prisma-client-js'],
    };
  },
});
