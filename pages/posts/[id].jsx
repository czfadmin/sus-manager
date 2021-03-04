import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import styles from "../../styles/utils.module.scss";
import Layout from "../../components/Layout";
import DateWrapper from "../../components/DateWrapper";
import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/post";

export default function Post({ postData, postsAllData }) {
	return (
		<Layout>
			<Head>{postData.title}</Head>
			<div className="flex items-stretch flex-wrap post-container p-2 m-2">
				<div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4  flex flex-col p-2 items-center lg:pb-2">
					<h1 className="prose mb-2 text-2xl font-bold">
						{postData.title}
					</h1>
					<div className="flex flex-row items-center content-center">
						<DateWrapper dateString={postData.date} />
						<p className="text-gray-600 text-center italic  mb-1 ml-1 sm:mb-2">
							{". "}
							{postData.author}
						</p>
					</div>
					<article
						className={clsx(
							styles.article,
							"bg-gray-100 h-auto w-full shadow-xl",
						)}>
						<div
							className="text-sm"
							dangerouslySetInnerHTML={{
								__html: postData.contentHtml,
							}}
						/>
					</article>
				</div>
				<div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 flex flex-col items-start shadow-xl p-2 m-4 sm:ml-4 sm:mr-4 lg:m-0 md:m-2 sm:mb-2">
					<div className="text-md font-medium text-gray-600 sm:mb-1">
						<div className="no-underline text-blue-500 h-3 w-auto text-lg ">
							<Link href="/">Home</Link>
						</div>
					</div>
					<ul className="list-disc p-4">
						{postsAllData?.map((item) => (
							<li key={item.id} className="text-sm ml-2">
								<Link href={`/posts/${item.id}`}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<style jsx>{`
				.content > ul > li {
					font-size: 20px;
				}
				.content > ul {
					list-style-type: disc;
				}
				.post-container {
					overflow: auto;
				}
			`}</style>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	const postsAllData = await getSortedPostsData();
	return {
		props: {
			postData,
			postsAllData,
		},
	};
}
