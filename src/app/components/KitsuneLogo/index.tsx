"use client";

import { FC, useState } from "react";

interface KitsuneLogoProps {
	className?: string;
	height?: number;
	width?: number;
}

const KitsuneLogo: FC<KitsuneLogoProps> = ({ className = "", height = 600, width = 600 }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<button onClick={() => setIsActive((isActive) => !isActive)}>
			<svg
				className={`fixed bottom-[-22%] left-[-18%] w-[${width}px] h-[${height} ${className} ${
					isActive ? "animate-pulse-slow" : ""
				}`}
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				xmlSpace="preserve"
				viewBox="0 0 300 300"
				width={width}
				height={height}
			>
				<image
					width="100%"
					height="100%"
				/>
			</svg>
		</button>
	);
};

export default KitsuneLogo;