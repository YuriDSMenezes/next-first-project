import Head from 'next/head'

interface SEOprops {
    title: string;
    description: string;
    image: string;
    shouldExcludeTitleSuffix?: boolean;
    shouldIndexPage?: boolean;
}

export default function SEO({
    title,
    description,
    image,
    shouldExcludeTitleSuffix = false,
    shouldIndexPage = true
}: SEOprops) {
    const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| DevLanch' : ''}`

    return (
        <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
            {image && <meta name="image" content={image} />}
        </Head>
    )
}