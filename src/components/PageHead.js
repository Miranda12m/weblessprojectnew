import Head from 'next/head';

const PageHead = ({ title, description, keywords, image, url, subject }) => {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{title ? title : "Webless Project"}</title>
            <meta name="description" content={description ? description : ''} />
            <meta name="keywords" content={keywords ? keywords : ""} />
            <meta name="author" content="Webless Project" />
            <meta property="og:title" content={title ? title : "Webless Project"} />
            <meta property="og:description" content={description ? description : ""} />
            <meta property="og:image" content={image ? image : ""} />
            <meta property="og:url" content={url ? url : "https://weblessproject.com"} />
            <link rel="canonical" href={url ? url : "https://weblessproject.com"} />
            <meta name="Subject" content={subject ? subject : "Software Development"}/>
            <meta name="language" content="es" />
            <meta name="Revisit-After" content="3 days" />
            <meta content='all' name='googlebot-image' />
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default PageHead;