import { render, screen } from "@testing-library/react";
import NavLink from ".";

describe("NavLink", () => {
	it("should successfully render a link", () => {
		//Arrange
		render(<NavLink href={"/"}>Project</NavLink>);

		//Act
		const anchor = screen.getByRole("link");

		//Assert
		expect(anchor).toBeInTheDocument();
	});

	it("should pass children through", () => {
		render(<NavLink href={"/about"}>About</NavLink>);

		const aboutText = screen.getByText("About");

		expect(aboutText).toBeInTheDocument();
	});
});
