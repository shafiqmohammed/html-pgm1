const fs = require("fs");

let html = fs.readFileSync("index.html", "utf8");

// Decode HTML entities if present
html = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

describe("Speaker Page (50 Marks)", () => {

    test("Main heading exists", () => {
        expect(html).toMatch(/<h1>\s*Aaron Sorkin\s*<\/h1>/i);
    });

    test("Header element exists", () => {
        expect(html).toMatch(/<header>/i);
    });

    test("Section element exists", () => {
        expect(html).toMatch(/<section>/i);
    });

    test("Figure element exists", () => {
        expect(html).toMatch(/<figure>/i);
    });

    test("Image width is 260", () => {
        expect(html).toMatch(/width\s*=\s*["']260["']/i);
    });

    test("Figcaption exists", () => {
        expect(html).toMatch(/<figcaption>/i);
    });

    test("Contains cite element", () => {
        expect(html).toMatch(/<cite>/i);
    });

    test("Footer exists", () => {
        expect(html).toMatch(/<footer>/i);
    });

    test("Mailto link exists", () => {
        expect(html).toMatch(/mailto:info@aaronsorkin\.com/i);
    });

    test("Main element exists", () => {
        expect(html).toMatch(/<main>/i);
    });

});