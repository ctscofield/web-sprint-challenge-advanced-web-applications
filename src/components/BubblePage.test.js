import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const testColor = {
  code: {hex: ""},
  color: "",
  id: 0,
}

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage colorList={testColor}/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
  const setColorList = jest.fn();
  render(<BubblePage setColorList={setColorList}/>);
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading