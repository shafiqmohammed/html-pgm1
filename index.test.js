const fs = require("fs");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync("index.html", "utf8");
const dom = new JSDOM(html);
const document = dom.window.document;

describe("Speaker HTML Assignment", () => {

    test("Title exists", () => {
        expect(document.querySelector("title")).not.toBeNull();
        expect(document.querySelector("title").textContent.trim().length).toBeGreaterThan(0);
    });

    test("Main element exists", () => {
        expect(document.querySelector("main")).not.toBeNull();
    });

    test("One H1 heading exists", () => {
        expect(document.querySelectorAll("h1").length).toBe(1);
    });

    test("One H3 heading exists", () => {
        expect(document.querySelectorAll("h3").length).toBe(1);
    });

    test("Image exists", () => {
        expect(document.querySelector("img")).not.toBeNull();
    });

    test("Image has alt attribute", () => {
        expect(document.querySelector("img").hasAttribute("alt")).toBe(true);
    });

    test("Two paragraphs before praise section", () => {
        expect(document.querySelectorAll("main > p").length).toBeGreaterThanOrEqual(2);
    });

    test("Two H2 headings exist", () => {
        expect(document.querySelectorAll("h2").length).toBe(2);
    });

    test("Two blockquotes exist", () => {
        expect(document.querySelectorAll("blockquote").length).toBe(2);
    });

    test("Two cite elements exist", () => {
        expect(document.querySelectorAll("cite").length).toBe(2);
    });

    test("One unordered list exists", () => {
        expect(document.querySelector("ul")).not.toBeNull();
    });

    test("List contains four items", () => {
        expect(document.querySelectorAll("ul li").length).toBe(4);
    });

    test("Footer exists", () => {
        expect(document.querySelector("footer")).not.toBeNull();
    });

    test("Footer contains two paragraphs", () => {
        expect(document.querySelectorAll("footer p").length).toBe(2);
    });

});