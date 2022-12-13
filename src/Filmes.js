import styled from "styled-components";
import Filme from "./Filme"
import { useEffect, useState } from "react";
import axios from "axios";


export default function Filmes(){
    const [filmes, setFilmes] = useState(undefined);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        .then(res => setFilmes(res.data))
        .catch(err => console.log(err.response.data))
    }, []);

    return (
        <Container>
            Selecione o filme:
            <ListaFilmes>
            {filmes?.map(f => (
                    <Filme 
                    key={f.id}
                    f={f}
                    />
                ))}
            </ListaFilmes>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: "#293845";
    margin-top: 30px;
    padding-top: 70px;
`
const ListaFilmes = styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`