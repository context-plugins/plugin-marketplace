import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionCustomLabelsApi = {
  RekognitionServiceDetectCustomLabels: "RekognitionService.DetectCustomLabels",
} as const;
export type XAmzTargetAmazonRekognitionCustomLabelsApi =
  | (typeof XAmzTargetAmazonRekognitionCustomLabelsApi)[keyof typeof XAmzTargetAmazonRekognitionCustomLabelsApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionCustomLabelsApiSchema: EnumSchema<XAmzTargetAmazonRekognitionCustomLabelsApi> =
  s.enumOf<XAmzTargetAmazonRekognitionCustomLabelsApi>(XAmzTargetAmazonRekognitionCustomLabelsApi);
