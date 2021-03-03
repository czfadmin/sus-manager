import { parseISO, format } from "date-fns";

export default function DateWrapper({ dateString }) {
	const date = parseISO(dateString);
	return (
		<time
			dateTime={dateString}
			className="text-sm italic text-gray-500 mb-1 sm:mb-2 text-center h-4">
			{format(date, "LLLL d, yyyy")}
		</time>
	);
}
