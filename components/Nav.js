import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = ({ children }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
