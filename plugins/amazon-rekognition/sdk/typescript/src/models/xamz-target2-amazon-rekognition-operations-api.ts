import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionOperationsApi = {
  RekognitionServiceDetectCustomLabels: "RekognitionService.DetectCustomLabels",
} as const;
export type XAmzTarget2AmazonRekognitionOperationsApi =
  | (typeof XAmzTarget2AmazonRekognitionOperationsApi)[keyof typeof XAmzTarget2AmazonRekognitionOperationsApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionOperationsApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionOperationsApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionOperationsApi>(XAmzTarget2AmazonRekognitionOperationsApi);
