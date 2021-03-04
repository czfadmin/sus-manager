import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/post";
import { getPostVersion } from "../lib/version";
import Layout from "../components/Layout";
import DateWrapper from "../components/DateWrapper";
export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	const allPostsData = await getSortedPostsData();
	const versions = await getPostVersion();
	// The value of the `props` key will be
	//  passed to the `Home` component
	console.log(versions);
	return {
		props: {
			allPostsData,
			versions,
		},
	};
}

export default function Home({ allPostsData, versions }) {
	return (
		<Layout>
			<Head>
				<title>SUS Manager</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="leading-7 text-3xl font-medium">SUS Manager</h1>
			<div className="flex flex-row items-start mt-4">
				<section className="w-3/4 sm:w-full lg:w-3/4">
					<h1 className="font-medium text-gray-900 text-xl leading-6">
						Instructions
					</h1>
					<ul className="list-decimal mt-2 mb-2">
						{allPostsData.map(({ id, date, title }) => (
							<li
								key={id}
								className="text-md grid items-center grid-cols-2 ">
								<Link
									href={`/posts/${id}`}
									className="w-3/4 sm:w-full lg:w-3/4 sm:col-span-2">
									{title}
								</Link>
								<small className="text-xs font-sm w-1/4 sm:w-full lg:w-1/4 text-center text-gray-500 sm:col-span-2 sm:col-start-2">
									<DateWrapper dateString={date} />
								</small>
							</li>
						))}
					</ul>
				</section>
				<section className="mt-4">
					<h1 className="font-medium text-gray-900 text-xl leading-6">
						Versions
					</h1>
					<ul className="list-decimal m-2">
						{versions.map(({ title }, index) => (
							<li
								key={index}
								className="text-md grid items-center grid-cols-2">
								<Link
									href={`/posts/${title}`}
									className="w-3/4 sm:w-full lg:w-3/4 sm:col-span-2">
									{title}
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</Layout>
	);
}
