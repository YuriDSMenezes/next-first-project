import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { client } from "../../lib/prismic"
import { Container, ContentContainer, ImageContainer } from '../../styles/pages/Product'
import { Document } from 'prismic-javascript/types/documents'
import PrismicDom from 'prismic-dom'
import Prismic from 'prismic-javascript'
import { ParsedUrlQuery } from "querystring"
interface ProductProps {
    product: Document[]
}

const Product = async ({ product }: ProductProps) => {
    const routes = useRouter()

    if (routes.isFallback) {
        <p>carregando...</p>
    }

    return (
        <Container>
            <ImageContainer>
                <p>{product[0].data.price}</p>
            </ImageContainer>
            <ContentContainer>
                {/* <p>{PrismicDom.RichText.asText(product.data.title)}</p> */}
            </ContentContainer>
        </Container>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;
    const product = await client().getByUID('product', String(slug), {})

    return {
        props: {
            product
        },
        revalidate: 10
    }
}
export default Product