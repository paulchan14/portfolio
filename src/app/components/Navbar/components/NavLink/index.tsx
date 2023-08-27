import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type NavLinkProps = LinkProps & {
	children: ReactNode;
};
const NavLink: FC<NavLinkProps> = (props) => {
	return (
		<li>
			<Link
				className={
					"focus:border-2 hover:border-2 focus:border-vivenna hover:border-vivenna p-3 focus:rounded-3xl hover:rounded-3xl focus:outline-none focus:-m-[2px] hover:-m-[2px]"
				}
				{...props}
			/>
		</li>
	);
};

export default NavLink;
