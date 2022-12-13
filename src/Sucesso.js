import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function Sucesso() {
    const concluido = useLocation();
    return (
         <Container>
            <Titulo>Pedido feito <br></br> com sucesso!</Titulo>

            <Txt>
                <strong>Filme e sessão:</strong>
                <p>{concluido.state.sessao.movie.title}</p>
                <p>{concluido.state.sessao.day.date} - {concluido.state.sessao.name}</p>
            </Txt>

            <Txt >
                <strong>Ingressos</strong>
                {concluido.state.numeroAssento.map((a) => (
                <p key={a}>Assento: {a}</p>
                ))}
            </Txt>

            <Txt >
                <strong>Comprador(a):</strong>
                <p>Nome: {concluido.state.name}</p>
                <p>CPF: {concluido.state.cpf}</p>
            </Txt>
           
            <Link to="/">
                <Botao >Voltar pra Home</Botao>
            </Link>       

         </Container>

    
    )
}

const Titulo = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247A6B;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: "#293845";
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
`
const Txt = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    color: #293845;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`

const Botao = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto',sans-serif;
    color: white;
    border-radius:5px;
    border:none;
`