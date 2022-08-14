import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import TodoFrom from "../components/TodoForm";

afterEach(() => {
  cleanup();
});

test("should show input value Todo", () => {
  render(<TodoFrom />);
  const NewsItemElement = screen.getByTestId("inputTodo-2");
  expect(NewsItemElement).toBeInTheDocument;
  expect(NewsItemElement).toHaveTextContent;
});
