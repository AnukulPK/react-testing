import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  //Looks inside the div
  expect(div.innerHTML).toContain("Comment Box");

  //And checks to see if the commentbox is there

  ReactDOM.unmountComponentAtNode(div);
});
