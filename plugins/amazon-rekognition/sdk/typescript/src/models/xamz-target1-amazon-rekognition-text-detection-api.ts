import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionTextDetectionApi = {
  RekognitionServiceStartTextDetection: "RekognitionService.StartTextDetection",
} as const;
export type XAmzTarget1AmazonRekognitionTextDetectionApi =
  | (typeof XAmzTarget1AmazonRekognitionTextDetectionApi)[keyof typeof XAmzTarget1AmazonRekognitionTextDetectionApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionTextDetectionApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionTextDetectionApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionTextDetectionApi>(XAmzTarget1AmazonRekognitionTextDetectionApi);
