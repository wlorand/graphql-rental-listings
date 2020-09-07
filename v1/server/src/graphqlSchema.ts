/**
 * File: graphqlSchema.ts
 * Desc: Create a simple graphql schema with the graphql-js lib
 */

// graphql-js import de types
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

// import our listings data
import { listings } from './listings';

// construct a blank query and mutation object types
// each field has a resolver function defined for it
// - starts here returning simple strings

// Listing Object Type
const Listing = new GraphQLObjectType({
  name: 'Listing',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numOfGuests: { type: GraphQLNonNull(GraphQLInt) },
    numOfBeds: { type: GraphQLNonNull(GraphQLInt) },
    numOfBaths: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLFloat) },
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    listings: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))),
      resolve: () => {
        return listings;
      },
    },
    // hello: {
    //   type: GraphQLString,
    //   resolve: () => 'Hello from the Query!',
    // },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    deleteListing: {
      type: GraphQLNonNull(Listing),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (_root, { id }) => {
        const newListings = listings.filter((listing) => listing.id !== id);
        if (listings.length === newListings.length)
          throw new Error('Failed to Delete Listing - no id found');
        return newListings;
      },
    },

    // hello: {
    //   type: GraphQLString,
    //   resolve: () => 'Hello from the Mutation!',
    // },
  },
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
