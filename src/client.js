import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    url: "http://localhost:4000", // GraphQL 서버가 돌아가고 있는 주소
    cache: new InMemoryCache(),//
})


export default client;