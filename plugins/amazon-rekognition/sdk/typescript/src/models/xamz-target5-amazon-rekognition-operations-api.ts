import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AmazonRekognitionOperationsApi = {
  RekognitionServiceDetectModerationLabels: "RekognitionService.DetectModerationLabels",
} as const;
export type XAmzTarget5AmazonRekognitionOperationsApi =
  | (typeof XAmzTarget5AmazonRekognitionOperationsApi)[keyof typeof XAmzTarget5AmazonRekognitionOperationsApi]
  | (string & {});

export const xAmzTarget5AmazonRekognitionOperationsApiSchema: EnumSchema<XAmzTarget5AmazonRekognitionOperationsApi> =
  s.enumOf<XAmzTarget5AmazonRekognitionOperationsApi>(XAmzTarget5AmazonRekognitionOperationsApi);
