import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionTextDetectionApi = {
  RekognitionServiceDetectText: "RekognitionService.DetectText",
} as const;
export type XAmzTarget2AmazonRekognitionTextDetectionApi =
  | (typeof XAmzTarget2AmazonRekognitionTextDetectionApi)[keyof typeof XAmzTarget2AmazonRekognitionTextDetectionApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionTextDetectionApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionTextDetectionApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionTextDetectionApi>(XAmzTarget2AmazonRekognitionTextDetectionApi);
