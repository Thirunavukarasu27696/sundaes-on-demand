import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for the each scoop option from server", async () => {
  render(<Options optionType="scoops" />);
  //   find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);
  // confirm alt text of scoopImages
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for the each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  //   find images
  const scoopImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(scoopImages).toHaveLength(3);
  // confirm alt text of scoopImages
  // @ts-ignore
  const imageTitles = scoopImages.map((element) => element.alt);
  expect(imageTitles).toStrictEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
