import styled from 'styled-components'

export const Container = styled.div`
height:100vh;
`
export const Title = styled.h1`
color:#FFF;
text-align:center;
margin: 20px 0;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`
export const Header = styled.header`
display:flex;
align-items:center;
justify-content:flex-end;
height: 60px;
background-color:#ccc1;
ul {
    display:flex;
}
li {
    list-style:none;
    color:#fff;
    font-weight:bold;
    margin:0 30px;
    cursor:pointer;
    font-size:1.2rem;
    &:hover{
        color:#ccc9
    }
}
`