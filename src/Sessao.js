import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Sessao({ filme }) {
    return (
        <>
            <Titulo>
                {filme.weekday} - {filme.date}
            </Titulo>
            <Botoes>
                {filme.showtimes.map((f) => (
                    <Link to={`/assentos/${f.id}`} key={f.id}>
                        <button>{f.name}</button>
                    </Link>
                ))}
            </Botoes>
        </>
    )
}

const Titulo = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #22333b;
    font-weight: 500;
    font-size: 16px;
    margin-bottom:2%;
`

const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    button {
    color: white;
    background-color: #22333b;
    border-radius: 3px;
    border: none;
    display: inline;
    font-size:14px;
    font-weight:bold;
    flex-direction: row;
    justify-content: center;
    text-decoration:inherit;
    align-items: center;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 8%;
    cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`