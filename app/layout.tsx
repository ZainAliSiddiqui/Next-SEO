import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Next SEO",
	description: "Next SEO",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
