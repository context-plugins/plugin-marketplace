import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionFaceSearchApi = {
  RekognitionServiceGetFaceSearch: "RekognitionService.GetFaceSearch",
} as const;
export type XAmzTargetAmazonRekognitionFaceSearchApi =
  | (typeof XAmzTargetAmazonRekognitionFaceSearchApi)[keyof typeof XAmzTargetAmazonRekognitionFaceSearchApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionFaceSearchApiSchema: EnumSchema<XAmzTargetAmazonRekognitionFaceSearchApi> =
  s.enumOf<XAmzTargetAmazonRekognitionFaceSearchApi>(XAmzTargetAmazonRekognitionFaceSearchApi);
