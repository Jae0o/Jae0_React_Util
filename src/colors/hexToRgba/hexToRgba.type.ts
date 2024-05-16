export type hexToRgbaFunc = (
  hexCode: string,
  options?: HexToRgbaOptions
) => string;

interface HexToRgbaOptions {
  alpha?: number;
}
