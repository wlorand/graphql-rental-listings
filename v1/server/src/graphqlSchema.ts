/**
 * File: graphqlSchema.ts
 * Desc: Create a simple graphql schema with the graphql-js lib
 */

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

// construct a blank query and mutation object types - we need to support both
const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from the Query!',
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from the Mutation!',
    },
  },
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
