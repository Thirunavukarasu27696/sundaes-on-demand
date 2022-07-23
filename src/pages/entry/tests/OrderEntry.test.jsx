import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test("handles error for scoops and topping routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );
  server.resetHandlers(
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );
  render(<OrderEntry />);
  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(2);
  });
});
