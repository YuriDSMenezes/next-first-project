import React, { useEffect, useState } from 'react'
import { Container, Header, Title } from '../styles/pages/Home'
import Link from 'next/link'
import { CardContainer, CardContent, ContentContainer, ImageContainer } from '../styles/components/card'
import SEO from '../components/SEO'
import { GetServerSideProps } from 'next'
import { client } from '../lib/prismic'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'
import PrismicDom from 'prismic-dom'

interface HomeProps {
  allProducts: Document[]
}

const Home = ({ allProducts }: HomeProps) => {
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
        {allProducts.map((product) => (
          <Link href={`/products/${product.uid}`} key={product.id}>
            <CardContent>
              <ImageContainer>
                <img src={product.data.thumbnail.url}  alt={product.data.title} />
              </ImageContainer>
              <ContentContainer>
                <h3>Nome do produto</h3>
                <span>{PrismicDom.RichText.asText(product.data.title)}</span>
                <h3>Preço</h3>
                <span>R${product.data.price}</span>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const allProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ])

  return {
    props: {
      allProducts: allProducts.results
    }
  }
}

export default Home