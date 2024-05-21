import { GeoPosition } from "./haversineFormula.type";
/**
 * @func getTwoPointDistance
 *
 * 위도 경도를 지닌 두 지점 사이의 거리를 계산하는 공식입니다.
 *
 * @param firstPoint 첫 번째 포인트 위치를 전달받습니다.
 * @param secondPoint 두 번째 포인트 위치를 전달받습니다.
 *
 * 함수를 호출할때 firstPoint와 secondPoint에 전달하는 인수의 순서를 상관없습니다.
 *
 * @returns M 단위로 두 포인트의 거리를 반환합니다
 */
declare const haversineFormula: (firstPoint: GeoPosition, secondPoint: GeoPosition) => number;
export default haversineFormula;
