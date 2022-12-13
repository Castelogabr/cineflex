import styled from "styled-components"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Assento from "./Assento"

export default function Assentos() {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [sessao, setSessao] = useState(undefined);
    const [ids, setIds] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [numeroAssento, setNumeroAssento] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then(res => setSessao(res.data))
        .catch(err => console.log(err.response.data));
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        const body = { name: nome, cpf: cpf, ids: [...ids] }
        axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"`, body)
            .then(res => console.log(res.data), navigate("/sucesso", {
            state: {
                sessao: sessao,
                name: nome,
                cpf: cpf,
                numeroAssento: [...numeroAssento]
            }}))
        .catch(err => console.log(err.response.data))
    }
    return (
        <Container>
            Selecione o(s) assento(s)

            <ContainerAssentos>
                {sessao?.seats?.map(s => (
                    <Assento
                        key={s.id}
                        id={s.id}
                        ids={ids}
                        setIds={setIds}
                        numeroAssento={numeroAssento}
                        setNumeroAssento={setNumeroAssento}
                        nome={s.name}
                        isAvailable={s.isAvailable}
                    />
                ))}
            </ContainerAssentos>
            <ContainerLegenda>
                <LegendaSelecionado>
                    Selecionado
                </LegendaSelecionado>
                <LegendaDisponivel>
                    Indisponível
                </LegendaDisponivel>
                <LegendaIndisponivel>
                    Indisponível
                </LegendaIndisponivel>
            </ContainerLegenda>

            <Form>
                Nome do Comprador:
                <input
                    name="name"
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome..."
                    required
                />

                <br></br>

                CPF do Comprador:
                <input
                    name="cpf"
                    type="text"
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..."
                    required
                />
                <button type="submit" onClick={handleSubmit}>Reservar Assento(s)</button>
            </Form>

            <Footer title={sessao?.movie.title} posterURL={sessao?.movie.posterURL} name={sessao?.name} day={sessao?.day.weekday} />
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
    padding-bottom: 120px;
    padding-top: 70px;
`

const ContainerAssentos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const ContainerLegenda = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    margin: 20px 10px 10px 10px;
`

const LegendaSelecionado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-family: 'Roboto', 'sans-serif';
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    background-color: #1AAE9E;
`

const LegendaDisponivel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-family: 'Roboto', 'sans-serif';
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    background-color: #84a59d;
`
const LegendaIndisponivel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-family: 'Roboto', 'sans-serif';
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    background-color: #F7C52B;
`
const Form = styled.form`
    font-family: 'Roboto';
    width: 100vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    font-size: 18px;
    button {
    align-self: center;
    margin-top: 20px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border: none;
    border-radius: 3px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    }
    input {
    margin-top: 10px;
    width: 300px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    }
`