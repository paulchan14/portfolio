import { FC } from "react";

interface PageHeaderProps {
	title: string;
	subtitle: string;
}
const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => {
	return (
		<header className={"flex flex-col justify-center items-center gap-3 p-5"}>
			<h1>{title}</h1>
			<h3>{subtitle}</h3>
			{/*  Include a customizable background image? Color? */}
		</header>
	);
};

export default PageHeader;
