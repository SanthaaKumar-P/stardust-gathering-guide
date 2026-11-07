import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("serves the Gemini Gameverse event page at the home route", async () => {
    const { render, screen } = await import("@testing-library/react");
    const { Route } = await import("@/routes/index");
    const { createElement } = await import("react");

    render(createElement(Route.options.component as () => React.ReactNode));

    expect(screen.getByRole("heading", { name: /create the universe/i })).toBeInTheDocument();
    const registrationLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "https://forms.gle/qoKKkdprx7mh9sQh6");
    expect(registrationLinks.length).toBeGreaterThan(0);
    registrationLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
    expect(screen.getAllByText("To be announced").length).toBeGreaterThanOrEqual(3);
  });
});
