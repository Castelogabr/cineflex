import styled from "styled-components";

export default function Topo() { 
    return(
        <Header>
            <div>CINEFLEX</div>
        </Header>
    )
}

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 34px;
    color: #E8833A;
`