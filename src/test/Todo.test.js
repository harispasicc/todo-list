import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import TodoFrom from "../components/TodoForm";

afterEach(() => {
  cleanup();
});

test("should add Todos", () => {
  render(<TodoFrom />);
  const NewsItemElement = screen.getByTestId("addTodo-1");
  expect(NewsItemElement).toBeInTheDocument;
  expect(NewsItemElement).toHaveTextContent;
});
