import clsx from "clsx";
import Copyright from "./Copyright";
import Footer from "./Footer";
// import cn from 'classnames'
import styles from "../styles/layout.module.css";
const name = "SUS Manager";
export default function Layout({ children }) {
	return (
		<div
			className={clsx(
				styles.container,
				"block items-center bg-gray-100 shadow-xl",
			)}>
			<main className="p-4">{children}</main>
			<Footer>
				<Copyright />
			</Footer>
			<style jsx>{``}</style>
		</div>
	);
}
