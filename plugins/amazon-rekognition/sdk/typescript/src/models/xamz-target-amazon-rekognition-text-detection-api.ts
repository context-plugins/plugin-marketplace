import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionTextDetectionApi = {
  RekognitionServiceGetTextDetection: "RekognitionService.GetTextDetection",
} as const;
export type XAmzTargetAmazonRekognitionTextDetectionApi =
  | (typeof XAmzTargetAmazonRekognitionTextDetectionApi)[keyof typeof XAmzTargetAmazonRekognitionTextDetectionApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionTextDetectionApiSchema: EnumSchema<XAmzTargetAmazonRekognitionTextDetectionApi> =
  s.enumOf<XAmzTargetAmazonRekognitionTextDetectionApi>(XAmzTargetAmazonRekognitionTextDetectionApi);
