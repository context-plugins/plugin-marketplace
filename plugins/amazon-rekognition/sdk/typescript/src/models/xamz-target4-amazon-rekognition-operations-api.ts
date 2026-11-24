import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonRekognitionOperationsApi = {
  RekognitionServiceDetectLabels: "RekognitionService.DetectLabels",
} as const;
export type XAmzTarget4AmazonRekognitionOperationsApi =
  | (typeof XAmzTarget4AmazonRekognitionOperationsApi)[keyof typeof XAmzTarget4AmazonRekognitionOperationsApi]
  | (string & {});

export const xAmzTarget4AmazonRekognitionOperationsApiSchema: EnumSchema<XAmzTarget4AmazonRekognitionOperationsApi> =
  s.enumOf<XAmzTarget4AmazonRekognitionOperationsApi>(XAmzTarget4AmazonRekognitionOperationsApi);
