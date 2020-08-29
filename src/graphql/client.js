import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

// Secret here
const headers = { "x-hasura-admin-secret": `` };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "" , // Link Here
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
