import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Navbar } from "#components";

const roboto = Roboto({ weight: "300", subsets: ["cyrillic"] });

export const metadata: Metadata = {
	title: "Paul-chan | Portfolio",
	description: "Side projects and experiments by Paul-chan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
