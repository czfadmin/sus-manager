import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
const postsDir = path.join(process.cwd(), "posts");
export async function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDir);
	const allPostsData = fileNames
		.filter((item) => fs.statSync(path.join(postsDir, item)).isFile())
		.map((item) => {
			const id = item.replace(/\.md$/, "");
			const fullPath = path.join(postsDir, item);
			const fileContent = fs.readFileSync(fullPath, "utf8");
			const matterResult = matter(fileContent);

			return {
				id,
				...matterResult.data,
			};
		});
	return allPostsData.sort((a, b) => a.date < b.date);
}

export async function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDir);
	return fileNames
		.filter((item) => fs.statSync(path.join(postsDir, item)).isFile)
		.map((filename) => {
			return {
				params: {
					id: filename.replace(/\.md$/, ""),
				},
			};
		});
}

export async function getPostData(id) {
	const tempPath = path.join(postsDir, id);
	let fullPath = "";
	if (fs.statSync(tempPath).isDirectory()) {
		var files = fs.readdirSync(tempPath);
		fullPath = path.join(tempPath, `${files[0]}`);
	} else {
		fullPath = path.join(postsDir, `${id}.md`);
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
