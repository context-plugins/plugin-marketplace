import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionImageAnalysisApi = {
  RekognitionServiceDetectLabels: "RekognitionService.DetectLabels",
} as const;
export type XAmzTargetAmazonRekognitionImageAnalysisApi =
  | (typeof XAmzTargetAmazonRekognitionImageAnalysisApi)[keyof typeof XAmzTargetAmazonRekognitionImageAnalysisApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionImageAnalysisApiSchema: EnumSchema<XAmzTargetAmazonRekognitionImageAnalysisApi> =
  s.enumOf<XAmzTargetAmazonRekognitionImageAnalysisApi>(XAmzTargetAmazonRekognitionImageAnalysisApi);
