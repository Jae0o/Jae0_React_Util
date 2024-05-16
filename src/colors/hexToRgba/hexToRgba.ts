import { hexToRgbaFunc } from "./hexToRgba.type";

const hexToRgba: hexToRgbaFunc = (hex, options = {}) => {
  const { alpha = 1 } = options;

  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    throw new Error("Invalid alpha value.");
  }

  const hexCode = hex.startsWith("#") ? hex.slice(1) : hex;

  if (!hexCode.match(/^[0-9a-f]{3}([0-9a-f]{3})?$/i)) {
    throw new Error("Invalid color code");
  }

  const fullHexCode =
    hexCode.length === 3
      ? hexCode
          .split("")
          .map((char) => char + char)
          .join("")
      : hexCode;

  const rgbList = fullHexCode
    .match(/.{2}/g)
    ?.map((hexPart) => parseInt(hexPart, 16)) || [0, 0, 0];

  return `rgba(${rgbList.join(",")}` + (alpha ? `,${alpha})` : ")");
};

export default hexToRgba;
