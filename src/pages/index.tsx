import React, { useEffect, useState } from 'react'
import { Container, Header, Title } from '../styles/pages/Home'
import Link from 'next/link'
import { CardContainer, CardContent, ContentContainer, ImageContainer } from '../styles/components/card'
import SEO from '../components/SEO'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/products").then(response => {
      response.json().then(data => {
        setProducts(data)
      })
    })
  }, [])

  return (
    <Container>
      <SEO
        title="Lanchs"
        shouldExcludeTitleSuffix
        image="banner.jpg"
        description="Lanches"
      />
      <Header>
        <ul>
          <li>
            Home
          </li>
          <li>
            Mais informações do cardápio
          </li>
        </ul>
      </Header>
      <Title>
        Menu
        </Title>
      <CardContainer>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} >
          <CardContent>
            <ImageContainer>
              <img src={product.data.url} alt={product.data.title} />
            </ImageContainer>
            <ContentContainer>
              <h3>Nome do produto</h3>
              <span>{product.data.title}</span>
              <h3>Preço</h3>
              <span>R${product.data.prize}</span>
              <h3>Localidade</h3>
              <span>Águas claras</span>
            </ContentContainer>
          </CardContent>
          </Link>
        ))}
      </CardContainer>
    </Container>
  )
}

export default Home