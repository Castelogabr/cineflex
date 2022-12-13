import styled from "styled-components";

export default function Footer({ posterURL, day, name, title }) {
    return (
        <Container >
            <CapaFilme>
                <img src={posterURL} alt="img" />
            </CapaFilme>
            <Titulo>
                <span>{title}</span>

                {name ?
                    <span>
                        {day} - {name}
                    </span>
                    : ''
                }
            </Titulo>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 110px;
    border-top: 1px solid #9eadba;
    background-color: #dfe6ed;
    padding: 14px 10px;
    display: flex;
    span{
        font-size: 14px;
    }
`

const CapaFilme = styled.div`
    padding: 4px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    img {
    width: 60px;
    height: 72.5px;
    object-fit: cover;
    }
`
const Titulo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
`