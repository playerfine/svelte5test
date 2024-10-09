import { test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Button from "./Hallo.svelte";

test("no initial greeting", () => {
  render(Button);

  console.log(Button);

  const button = screen.getByRole("button");

  console.log(button);
});
