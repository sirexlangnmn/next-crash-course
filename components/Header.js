import headerStyles from "../styles/Header.module.css";

const Header = ({ children }) => {
	const x = 2;
	return (
		<div>
			<style jsx>
				{`
					.title {
						color: ${x > 3 ? "red" : "blue"};
					}
				`}
			</style>

			<h1 className={headerStyles.title}>
				<span>Web Dev</span> <span className="title">News</span>
				<p className={headerStyles.description}>Keep up with the latest news</p>
			</h1>
		</div>
	);
};

export default Header;
