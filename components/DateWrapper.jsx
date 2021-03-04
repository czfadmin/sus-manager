import { parseISO, format } from "date-fns";

export default function DateWrapper({ dateString }) {
	const date = parseISO(dateString);
	return (
		<time
			dateTime={dateString}
			className="text-xs italic text-gray-500 sm:mb-2 text-center m-2">
			{format(date, "LLLL d, yyyy")}
		</time>
	);
}
