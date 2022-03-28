import { ApolloServer } from 'apollo-server';

import {
  productGroups,
  productOptionGroups,
  productOptions,
  products,
  productOptionDetailRel,
} from './db/index.js';
import { resolvers, typeDefs } from './graphql/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    productGroups,
    productOptionGroups,
    productOptions,
    products,
    productOptionDetailRel,
  },
});

server.listen({ port: 5002 }).then(({ url }) => {
  console.log('server start: ', url);
});
