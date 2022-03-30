const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");

async function createPDF() {
  const document = await PDFDocument.load(readFileSync("./jane-doe.pdf"));
  //const me = document.findPageForAnnotationRef(12)
  //console.log(me)
}
createPDF();