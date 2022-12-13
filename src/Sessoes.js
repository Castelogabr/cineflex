import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Sessao from "./Sessao"
import Footer from "./Footer"

export default function Sessoes() {
    const { idFilme } = useParams();
    const [filme, setFilme] = useState(undefined);
    
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(res => setFilme(res.data))
        .catch(err => console.log(err.response.data))
    }, []);

    return (
        <Container>
            Selecione o horário:
            <Horarios>
                {filme?.days.map(f => (
                    <Sessao
                        filme={f}
                        key={f.id}
                    />
                ))}
            </Horarios>
            <Footer posterURL={filme?.posterURL} title={filme?.title} />
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: "#293845";
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const Horarios = styled.div`
    margin-top: 30px;
`