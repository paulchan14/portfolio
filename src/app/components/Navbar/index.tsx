import { NavLink } from "./components";

export default function Navbar() {
	return (
		<nav>
			<ul className="flex min-w-screen gap-4">
				<NavLink href="/">Projects</NavLink>
				<NavLink href="/about">About Me</NavLink>
				<NavLink href="/links">Links</NavLink>
			</ul>
		</nav>
	);
}
