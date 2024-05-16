"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors_default
});
module.exports = __toCommonJS(src_exports);

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
//# sourceMappingURL=index.cjs.map
