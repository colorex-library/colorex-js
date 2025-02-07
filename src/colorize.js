// colorize.js

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static fromRgb(rgb) {
        const parts = rgb.split(',');
        if (parts.length === 3) {
            const r = parseInt(parts[0], 10);
            const g = parseInt(parts[1], 10);
            const b = parseInt(parts[2], 10);
            return new Color(r, g, b);
        }
        throw new Error('Invalid RGB format');
    }

    static fromHex(hex) {
        if (hex.length === 7 && hex[0] === '#') {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return new Color(r, g, b);
        }
        throw new Error('Invalid HEX format');
    }
}

String.prototype.color = function(color) {
    let colorInstance;
    if (color.startsWith("#")) {
        colorInstance = Color.fromHex(color);
    } else {
        colorInstance = Color.fromRgb(color);
    }

    if (colorInstance) {
        return `\x1b[38;2;${colorInstance.r};${colorInstance.g};${colorInstance.b}m${this}\x1b[0m`;
    }
    return this;
};

String.prototype.bgColor = function(color) {
    let colorInstance;
    if (color.startsWith("#")) {
        colorInstance = Color.fromHex(color);
    } else {
        colorInstance = Color.fromRgb(color);
    }

    if (colorInstance) {
        return `\x1b[48;2;${colorInstance.r};${colorInstance.g};${colorInstance.b}m${this}\x1b[0m`;
    }
    return this;
};

String.prototype.bold = function() {
    return `\x1b[1m${this}\x1b[0m`;
};

String.prototype.italic = function() {
    return `\x1b[3m${this}\x1b[0m`;
};

String.prototype.underline = function() {
    return `\x1b[4m${this}\x1b[0m`;
};

String.prototype.strikethrough = function() {
    return `\x1b[9m${this}\x1b[0m`;
};

String.prototype.dim = function() {
    return `\x1b[2m${this}\x1b[0m`;
};

String.prototype.invert = function() {
    return `\x1b[7m${this}\x1b[0m`;
};

module.exports = {
    Color,
    String: String.prototype
};