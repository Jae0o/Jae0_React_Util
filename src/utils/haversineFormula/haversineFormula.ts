import { GeoPosition } from "./haversineFormula.type";

const EARTH_RADIUS = 6371;

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
const haversineFormula = (
  firstPoint: GeoPosition,
  secondPoint: GeoPosition
) => {
  const degLat = (firstPoint.lat - secondPoint.lat) * (Math.PI / 180);
  const degLng = (firstPoint.lng - secondPoint.lng) * (Math.PI / 180);

  // 위도와 경도를 차이를 이용한 중간 계산값
  const distanceCalc =
    Math.sin(degLat / 2) * Math.sin(degLat / 2) +
    Math.cos(firstPoint.lat * (Math.PI / 180)) *
      Math.cos(secondPoint.lat * (Math.PI / 180)) *
      Math.sin(degLng / 2) *
      Math.sin(degLng / 2);

  // 이후 루트를 씌운 후 역탄젠트를 구한 값
  const centralAngle =
    2 * Math.atan2(Math.sqrt(distanceCalc), Math.sqrt(1 - distanceCalc));

  const distance = EARTH_RADIUS * centralAngle * 1000; // Distance in m

  return distance;
};

export default haversineFormula;
