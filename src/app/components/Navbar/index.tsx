import { NavLink } from "./components";

export default function Navbar() {
	return (
		<nav>
			<ul className="flex gap-4 justify-center min-w-screen p-8">
				<NavLink href="/">Projects</NavLink>
				<NavLink href="/about">About</NavLink>
				<NavLink href="/links">Links</NavLink>
			</ul>
		</nav>
	);
}
