import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { Container, ContentContainer, ImageContainer } from '../../styles/pages/Product'

export const Product = async ({...props}) => {
    const routes = useRouter()

    if (routes.isFallback) {
        <p>carregando...</p>
    }
    // console.log(props)
    return (
        <Container>
            <ImageContainer>
                <p>images</p>
            </ImageContainer>
            <ContentContainer>
                <p>teste</p>
            </ContentContainer>
        </Container>
    )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3333/products`)
    const products = await response.json()

    const paths = products.map((category) => {
        return {
            params: { slug: category.id }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;

    const response = await fetch(`http://localhost:3333/products?id=${slug}`)
    const product = await response.json()

    return {
        props: {
            product
        },
        revalidate: 60
    }
}