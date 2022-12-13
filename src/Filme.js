import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Filme({f}){
    return(
        <>
            <Link to={`/sessoes/${f.id}`}>
               <Logo src={f.posterURL} alt={f.title} />
            </Link>
        </> 
    )
}

const Logo = styled.img`
width: 130px;
height: 190px;
margin-bottom:20%;
padding: 8px;
border-radius: 3px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
object-fit: cover;
`