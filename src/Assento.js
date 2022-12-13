import { useState } from "react";
import styled from "styled-components";

export default function Assento({ nome, isAvailable, ids, setIds, id, numeroAssento, setNumeroAssento }) {
    const [corSelecionada, setCorSelecionada] = useState(false);

    function selecionado(nome) {
        if (nome) {
            setCorSelecionada(!corSelecionada);
            setIds([...ids, id]);
            setNumeroAssento([...numeroAssento, nome]);
        } if (!isAvailable) {
            alert("assento indisponível")
            setCorSelecionada("");
        }
    }

    return (
        <Cadeiras
            onClick={() => selecionado(nome)}
            isAvailable={isAvailable}
            corSelecionada={corSelecionada} >
            {nome}
        </Cadeiras>
    )
}

const Cadeiras = styled.button`
  width: 35px;
  height: 35px;
  border:none;
  background: ${props => props.isAvailable ? '#84a59d' : '#F7C52B'};
  background-color: ${props => props.corSelecionada ? '#1AAE9E' : ''};
  border-radius: 62%;
  font-size: 13px;
  margin-bottom: 10px;
  margin-right: 8px;
  cursor: pointer;
`