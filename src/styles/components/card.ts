import styled from 'styled-components'

export const CardContainer = styled.div`
border-color:1px solid #ccc;
border-radius:4px;
margin:30px auto;
display:flex;
flex-wrap:wrap;
width: 70%;
align-items:center;
justify-content:center;
`
export const CardContent = styled.div`
margin:20px;
cursor:pointer;
background-color:#ccc1;
border-radius:6px;
display:flex;
align-items:flex-start;
justify-content:space-between;
padding:20px 10px;
color:#ccc9;
flex-wrap:wrap;
&:hover{
    background-color:#ccc3;
}
`
export const ImageContainer = styled.div`
margin:0 10px;
display:flex;
align-items:center;
flex:1;
img {
    width:250px;
    border-radius:4px;
}
`
export const ContentContainer = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
margin-right:20px;  
span{
    margin: 10px 0;
    color:#ccc5
}
`