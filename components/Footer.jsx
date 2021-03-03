import Link from "next/link";
import clsx from "clsx";
import styles from "./footer.module.scss";
export default function Copyright(props) {
	return (
		<footer
			className={clsx(
				styles.footer,
				"text-sm font-bold shadow-md sticky bg-gray-200",
			)}>
			<div className="flex items-center h-4 text-center ">
				<span className="mr-2">
					<Link href="/" className="mr-2">
						Home
					</Link>{" "}
				</span>
				{props.children}
				Powered by{" "}
				<a
					className="text-center h-4 ml-2"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					vercel
					{/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
				</a>{" "}
			</div>
		</footer>
	);
}
