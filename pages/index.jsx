import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/post";
import Layout from "../components/Layout";
import Date from "../components/DateWrapper";
export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	const allPostsData = await getSortedPostsData();

	// The value of the `props` key will be
	//  passed to the `Home` component
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Head>
				<title>SUS Manager</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<h1 className="leading-7 text-3xl font-medium">SUS Manager</h1>
				<section className="mt-4">
					<h1 className="font-medium text-gray-900 text-xl leading-6">
						Update
					</h1>
					<ul className="list-disc m-2">
						{allPostsData.map(({ id, date, title }) => (
							<li key={id}>
								<Link href={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className="text-sm font-sm text-gray-500">
									<Date dateString={date} />
								</small>
							</li>
						))}
					</ul>
				</section>
			</div>
		</Layout>
	);
}
