"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type NavLinkProps = LinkProps & {
	children: ReactNode;
};
const NavLink: FC<NavLinkProps> = ({ href, children, ...props }) => {
	const currentRoute = usePathname();
	const isCurrentPage = href === currentRoute ? true : false;

	return (
		<li>
			<Link
				aria-current={isCurrentPage}
				className={`focus:border-2 hover:border-2 focus:border-hoid hover:border-hoid p-3 rounded-3xl focus:outline-none focus:-m-[2px] hover:-m-[2px] ${
					isCurrentPage ? "bg-vivenna" : ""
				}`}
				href={href}
				{...props}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavLink;
