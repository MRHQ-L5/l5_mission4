const filterText = require("./filterText.js");

describe("filter texts tests", () => {
  
  it(`return "Car Insurance" when "Car Insurance?"`, () => {
    expect(filterText("Car Insurance?")).toStrictEqual("Car Insurance");
  })
})