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

// src/utils/haversineFormula/haversineFormula.ts
var EARTH_RADIUS = 6371;
var haversineFormula = (firstPoint, secondPoint) => {
  const degLat = (firstPoint.lat - secondPoint.lat) * (Math.PI / 180);
  const degLng = (firstPoint.lng - secondPoint.lng) * (Math.PI / 180);
  const distanceCalc = Math.sin(degLat / 2) * Math.sin(degLat / 2) + Math.cos(firstPoint.lat * (Math.PI / 180)) * Math.cos(secondPoint.lat * (Math.PI / 180)) * Math.sin(degLng / 2) * Math.sin(degLng / 2);
  const centralAngle = 2 * Math.atan2(Math.sqrt(distanceCalc), Math.sqrt(1 - distanceCalc));
  const distance = EARTH_RADIUS * centralAngle * 1e3;
  return distance;
};
var haversineFormula_default = haversineFormula;
export {
  haversineFormula_default as haversineFormula,
  hexToRgba_default as hexToRgba
};
//# sourceMappingURL=index.js.map
