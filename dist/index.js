// src/colors/hexToRgba/hexToRgba.ts
var hexToRgba = (hex, options = {}) => {
  const { alpha = 1 } = options;
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    throw new Error("Invalid alpha value.");
  }
  const hexCode = hex.startsWith("#") ? hex.slice(1) : hex;
  if (!hexCode.match(/^[0-9a-f]{3}([0-9a-f]{3})?$/i)) {
    throw new Error("Invalid color code");
  }
  const fullHexCode = hexCode.length === 3 ? hexCode.split("").map((char) => char + char).join("") : hexCode;
  const rgbList = fullHexCode.match(/.{2}/g)?.map((hexPart) => parseInt(hexPart, 16)) || [0, 0, 0];
  return `rgba(${rgbList.join(",")}` + (alpha ? `,${alpha})` : ")");
};
var hexToRgba_default = hexToRgba;

// src/colors/index.ts
var colors_default = { hexToRgba: hexToRgba_default };
export {
  colors_default as colors
};
//# sourceMappingURL=index.js.map
