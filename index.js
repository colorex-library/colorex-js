const colorize = require('./src/colorize');

console.log("Hello, World!".color("0,255,0"));  // Green text
console.log("Error!".color("#FF0000"));         // Red text

console.log("Bold Text".bold());                // Bold text
console.log("Italic Text".italic());            // Italic text
console.log("Underlined Text".underline());     // Underlined text
console.log("Strikethrough Text".strikethrough()); // Strikethrough text
console.log("Dim Text".dim());                  // Dim text
console.log("Inverted Text".invert());          // Inverted text (background inversion)

console.log("Background Color".bgColor("0,0,255")); // Blue background

// 체이닝 예시
console.log("ALL".color("0,255,0").bold().italic().underline().strikethrough().dim().invert().bgColor("0,0,255")); // All styles applied
