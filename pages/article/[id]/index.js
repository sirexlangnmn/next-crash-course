import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
	// const router = useRouter();
	// const { id } = router.query;

	return (
		<div>
			<p>This is an article {article.id}</p>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<Link href="/">Go Back</Link>
		</div>
	);
};

// export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const articles = await res.json();
	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({
		params: {
			id: id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default article;
