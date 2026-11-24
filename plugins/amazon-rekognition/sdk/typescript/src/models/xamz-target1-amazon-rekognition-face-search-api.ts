import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionFaceSearchApi = {
  RekognitionServiceStartFaceSearch: "RekognitionService.StartFaceSearch",
} as const;
export type XAmzTarget1AmazonRekognitionFaceSearchApi =
  | (typeof XAmzTarget1AmazonRekognitionFaceSearchApi)[keyof typeof XAmzTarget1AmazonRekognitionFaceSearchApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionFaceSearchApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionFaceSearchApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionFaceSearchApi>(XAmzTarget1AmazonRekognitionFaceSearchApi);
