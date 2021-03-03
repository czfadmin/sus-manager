import Layout from "../components/Layout";

export default function Custom404() {
	return (
		<Layout>
			<p className="items-center text-lg text-center min-w-full min-h-screen flex ">
				404 - Page Not Found
			</p>
			<style jsx>
				{`
					p {
						margin: 0 auto;
						min-width: fit-content;
						width: fit-content;
					}
				`}
			</style>
		</Layout>
	);
}
