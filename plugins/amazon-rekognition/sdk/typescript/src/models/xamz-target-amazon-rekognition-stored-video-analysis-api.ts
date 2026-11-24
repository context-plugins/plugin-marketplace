import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionStoredVideoAnalysisApi = {
  RekognitionServiceGetLabelDetection: "RekognitionService.GetLabelDetection",
} as const;
export type XAmzTargetAmazonRekognitionStoredVideoAnalysisApi =
  | (typeof XAmzTargetAmazonRekognitionStoredVideoAnalysisApi)[keyof typeof XAmzTargetAmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<XAmzTargetAmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<XAmzTargetAmazonRekognitionStoredVideoAnalysisApi>(
    XAmzTargetAmazonRekognitionStoredVideoAnalysisApi,
  );
