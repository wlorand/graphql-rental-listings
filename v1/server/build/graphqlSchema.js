"use strict";
/**
 * File: graphqlSchema.ts
 * Desc: Create a simple graphql schema with the graphql-js lib
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
// construct a blank query and mutation object types - we need to support both
const query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: graphql_1.GraphQLString,
            resolve: () => 'Hello from the Query!',
        },
    },
});
const mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        hello: {
            type: graphql_1.GraphQLString,
            resolve: () => 'Hello from the Mutation!',
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query,
    mutation,
});
