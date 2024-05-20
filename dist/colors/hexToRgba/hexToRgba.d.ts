import { hexToRgbaFunc } from "./hexToRgba.type";
/**
 * HEX 색상 Code를 RGBA로 변환합니다.
 *
 * @param hex 16진수 HEX 색상 코드를 전달 받습니다. (#000, #000000, 000 ,000000)
 * @param options alpha 0 ~ 1 사이의 값을 전달하여 투명도를 조절할 수 있습니다.
 * @returns rgba(R, G, B, A) string값을 전달받습니다.
 */
declare const hexToRgba: hexToRgbaFunc;
export default hexToRgba;
