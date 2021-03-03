import Link from "next/link";

export default function Copyright(props) {
	return (
		<div className="flex items-start mr-2">
			Copyright @<Link href="http://github.com/czfadmin">czfadmin</Link>
		</div>
	);
}
