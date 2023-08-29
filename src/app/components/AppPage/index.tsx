import { FC } from "react";

import { StandardFCProps } from "#types";

const AppPage: FC<StandardFCProps> = ({ children }) => {
	return (
		<main className={"flex min-h-screen min-w-screen flex-col items-center justify-between bg-nightblood p-5"}>
			{children}
		</main>
	);
};

export default AppPage;
