import path from 'path';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import { helloResolver } from './resolvers/hello.resolver.js';
import { productGroupResolver } from './resolvers/product-group.resolver.js';

const __dirname = path.resolve();
const typesArray = loadFilesSync(path.join(__dirname, 'src/graphql/**/*.graphql'), {
  extensions: ['graphql'],
});

const resolverArray = [helloResolver, productGroupResolver];

const resolvers = mergeResolvers(resolverArray);
const typeDefs = mergeTypeDefs(typesArray);

export { resolvers, typeDefs };
