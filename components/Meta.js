import Head from "next/head";

const Meta = ({ title, keywords, descriptions }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={descriptions} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="John Doe" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
	);
};

Meta.defaultProps = {
	title: "WebDev Newz",
	keyword: "web development, programming, html, css",
	descriptions: "Get the latest news in web dev",
};

export default Meta;
