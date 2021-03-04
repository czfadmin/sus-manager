const fs = require("fs");
const path = require("path");
const versionDir = path.join(process.cwd(), "posts");
export async function getPostVersion() {
	return fs
		.readdirSync(versionDir)
		.filter((item) =>
			fs.statSync(path.join(versionDir, item)).isDirectory(),
		)
		.map((filename) => {
			return {
				title: filename,
			};
		});
}
