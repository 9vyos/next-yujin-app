// init apollo client for graphql
import { ApolloClient, DocumentNode, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const graphqlQuery = (query: DocumentNode) =>
  client.query({
    query,
  });
