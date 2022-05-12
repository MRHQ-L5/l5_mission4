const filterText = require("./filterText.js");

describe("filter texts tests", () => {
  
  it(`return "hello world" when "hello world"`, () => {
    expect(filterText("hello world")).toStrictEqual("hello world");
  })

  it(`return " hello world " when ";hello?world!"`, () => {
    expect(filterText(";hello?world!")).toStrictEqual(" hello world ");
  })

  it(`return "hello world" when "hello%world"`, () => {
    expect(filterText("hello%world")).toStrictEqual("hello world");
  })

  it(`return " hello world" when "!hello world"`, () => {
    expect(filterText("!hello world")).toStrictEqual(" hello world");
  })

  it(`return "hellow world" when "hello;world"`, () => {
    expect(filterText("hello;world")).toStrictEqual("hello world");
  })

  it(`return "hello world " when "hello world?"`, () => {
    expect(filterText("hello world?")).toStrictEqual("hello world ");
  })
})