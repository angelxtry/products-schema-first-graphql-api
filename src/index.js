import { ApolloServer, gql } from 'apollo-server';

import {
  productGroups,
  productOptionGroups,
  productOptions,
  products,
  productOptionDetailRel,
} from './db/index.js';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      productGroups: [ProductGroup!]!
    }

    type ProductGroup {
      id: ID
      productGroupName: String
      companyName: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      productGroups: (_, __, { productGroups }) => {
        return productGroups;
      },
    },
  },
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
