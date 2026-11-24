import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionMediaAnalysisJobApi = {
  RekognitionServiceGetMediaAnalysisJob: "RekognitionService.GetMediaAnalysisJob",
} as const;
export type XAmzTargetAmazonRekognitionMediaAnalysisJobApi =
  | (typeof XAmzTargetAmazonRekognitionMediaAnalysisJobApi)[keyof typeof XAmzTargetAmazonRekognitionMediaAnalysisJobApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionMediaAnalysisJobApiSchema: EnumSchema<XAmzTargetAmazonRekognitionMediaAnalysisJobApi> =
  s.enumOf<XAmzTargetAmazonRekognitionMediaAnalysisJobApi>(XAmzTargetAmazonRekognitionMediaAnalysisJobApi);
