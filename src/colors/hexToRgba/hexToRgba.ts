import { hexToRgbaFunc } from "./hexToRgba.type";

/**
 * HEX 색상 Code를 RGBA로 변환합니다.
 *
 * @param hex 16진수 HEX 색상 코드를 전달 받습니다. (#000, #000000, 000 ,000000)
 * @param options alpha 0 ~ 1 사이의 값을 전달하여 투명도를 조절할 수 있습니다.
 * @returns rgba(R, G, B, A) string값을 전달받습니다.
 */
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
