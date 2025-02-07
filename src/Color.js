class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static fromRgb(rgb) {
        const parts = rgb.split(",");
        if (parts.length === 3) {
            const r = parseInt(parts[0]);
            const g = parseInt(parts[1]);
            const b = parseInt(parts[2]);
            return new Color(r, g, b);
        }
        return null;
    }

    static fromHex(hex) {
        if (hex.length === 7 && hex[0] === "#") {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return new Color(r, g, b);
        }
        return null;
    }
}

module.exports = { Color };
