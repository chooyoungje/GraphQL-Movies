import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

function Movies() { 
    const [movies, setMovies] = useState([])
    const client = useApolloClient();
    useEffect(() => {
        client.query({
            query: gql`
            {
                allMovies {
                    title
                }
            }`
        }).then(res => setMovies(res.data.allMovies));
    }, [client]);
    return <div>영화들의 목록임</div>
}


export default Movies;