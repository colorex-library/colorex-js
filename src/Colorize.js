const { Color } = require("./Color");

class Colorize {
    constructor(text) {
        this.text = text;
        this.styles = [];
    }

    color(color) {
        let colorInstance;
        if (color.startsWith("#")) {
            colorInstance = Color.fromHex(color);
        } else {
            colorInstance = Color.fromRgb(color);
        }

        if (colorInstance) {
            this.styles.push(`\x1b[38;2;${colorInstance.r};${colorInstance.g};${colorInstance.b}m`);
        }
        return this;
    }

    bgColor(color) {
        let colorInstance;
        if (color.startsWith("#")) {
            colorInstance = Color.fromHex(color);
        } else {
            colorInstance = Color.fromRgb(color);
        }

        if (colorInstance) {
            this.styles.push(`\x1b[48;2;${colorInstance.r};${colorInstance.g};${colorInstance.b}m`);
        }
        return this;
    }

    bold() {
        this.styles.push("\x1b[1m");
        return this;
    }

    italic() {
        this.styles.push("\x1b[3m");
        return this;
    }

    underline() {
        this.styles.push("\x1b[4m");
        return this;
    }

    strikethrough() {
        this.styles.push("\x1b[9m");
        return this;
    }

    dim() {
        this.styles.push("\x1b[2m");
        return this;
    }

    invert() {
        this.styles.push("\x1b[7m");
        return this;
    }

    toString() {
        return `${this.styles.join("")}${this.text}\x1b[0m`;
    }
}

module.exports = { Colorize };
