const { Colorize } = require("./src/Colorize");

function colorizeText(text) {
    return new Colorize(text);
}

// 기본 색상
console.log(colorizeText("Hello, World!").color("0,255,0").toString());  // Green
console.log(colorizeText("Error!").color("#FF0000").toString());         // Red

// 스타일 적용
console.log(colorizeText("Bold Text").bold().toString());
console.log(colorizeText("Italic Text").italic().toString());
console.log(colorizeText("Underlined Text").underline().toString());
console.log(colorizeText("Strikethrough Text").strikethrough().toString());
console.log(colorizeText("Dim Text").dim().toString());
console.log(colorizeText("Inverted Text").invert().toString());

// 배경 색상 적용
console.log(colorizeText("Background Color").bgColor("0,0,255").toString());

// 모든 스타일 적용
console.log(
    colorizeText("ALL")
        .color("0,255,0")
        .bold()
        .italic()
        .underline()
        .strikethrough()
        .dim()
        .invert()
        .bgColor("0,0,255")
        .toString()
);
