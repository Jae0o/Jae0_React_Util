# Jaebrary Utils

<br>

<small>[🔗 다양한 React Component & hook 라이브러리](https://www.npmjs.com/package/@jae0brary/react)</small>

여러 편의를 위해 모아놓은 util 함수입니다.

사용방법은 아래 내용을 참고해주세요!

<br>

## install

```jsx
import utils from "@jae0brary/utils";

// or

const utils = require("@jae0brary/utils");
```

<br>

<hr>

<br>

<details>
  <summary style="font-size:18px"><b>하버사인 공식 ( Haversine Formula )</b></summary>

<hr>

<br>
 
위도 경도로 이루어진 두개의 `Point`지점 사이의 경로를 구할 수 있는 `util` 함수 입니다.

해당 함수에서는 2개의 지점을 인수로 전달받습니다. <br>
( 각 지점의 전달 순서는 무관 )

  <br>

```jsx
export interface GeoPosition {
  lat: number; // 위도
  lng: number; // 경도
}
```

```jsx
const SEOUL_POINT = {
  lat: 37.564214,
  lng: 127.001699,
};

const BUSAN_POINT = {
  lat: 35.137922,
  lng: 129.055628,
};

const distance = haversineFormula(SEOUL_POINT, BUSAN_POINT);
```

</details>

<br>

<details>
  <summary style="font-size:18px"><b>HEX to RGBA</b></summary>

<hr>

<br>

16진수로 이루어진 색상코드 HEX 코드를 RGBA 형식으로 변환할 수 있는 util 함수입니다.

첫 번째 인수로 HEX 코드를 전달할 수 있습니다. <br>

- `#000` `#000000` `000` `000000` 과같이 `string`으로 전달할 수 있습니다.

두 번째 인수로 options 객체를 전달할 수 있습니다.

- 내부 alpha 속성에 `0` ~ `1` 사이의 `number`를 전달하여 투명도를 조절할 수 있습니다.

```jsx
const rgbaValue = hexToRgba("#000", { alpha: 0.6 });

// rgba(0, 0, 0, 0.6)
```

<br>

<hr>

</details>

<br>

<br>

<br>

## Version

- **0.0.2** <br>
  haversine formula 추가
