# colorex-js

`colorex-js` is a simple and flexible JavaScript library that provides an easy way to style your terminal output with color and text formatting. With support for both RGB and HEX color codes, as well as text styles like bold, italic, underline, strikethrough, and more, it makes your terminal applications visually more appealing and readable.

## Features
* RGB Color Support: Define colors using RGB values (e.g., color_rgb(255, 0, 0)).
* HEX Color Support: Use HEX color codes (e.g., color_hex("#FF0000")).
* Text Styles: Bold, italic, underline, strikethrough, dim, and inverted text.
* Background Colors: Set the background color using RGB or HEX.
* Chainable API: Apply multiple styles in a single statement using method chaining.

## Installation

To install `colorex-js`, you can use npm:

```bash
npm install colorex-js
```

## Usage
Here's how you can use `colorex-js` to add color and styles to your terminal output:

```javascript
const { Colorize } = require('colorex-js');

// Basic color usage
console.log("Hello, World!".color("0,255,0"));  // Green text
console.log("Error!".color("#FF0000"));         // Red text

// Text styles
console.log("Bold Text".bold());                // Bold text
console.log("Italic Text".italic());            // Italic text
console.log("Underlined Text".underline());     // Underlined text
console.log("Strikethrough Text".strikethrough()); // Strikethrough text
console.log("Dim Text".dim());                  // Dim text
console.log("Inverted Text".invert());          // Inverted (background) text

// Background color
console.log("Background Color".bgColor("0,0,255")); // Blue background

// Combining multiple styles
console.log("ALL".color("0,255,0").bold().italic().underline().strikethrough().dim().invert().bgColor("0,0,255")); // All styles
```

## Supported Styles

* Color: RGB and HEX color formats.
* Text Styles:
    * bold()
    * italic()
    * underline()
    * strikethrough()
    * dim()
    * invert()
* Background Colors: bg_color() with RGB or HEX values.

## Example Output
The following example would result in a green-colored "Hello, World!" and a red "Error!" message in the terminal.

```rust
console.log("Hello, World!".color("0,255,0"));  // Green text
console.log("Error!".color("#FF0000"));         // Red text
```

## Supported Color Formats
* RGB: `"r,g,b"` (e.g., `"255,0,0"` for red).
* HEX: `"#RRGGBB"` (e.g., `"#FF0000"` for red).

# License
This project is licensed under the MPL-2.0 License - see the [LICENSE](LICENSE) file for details.