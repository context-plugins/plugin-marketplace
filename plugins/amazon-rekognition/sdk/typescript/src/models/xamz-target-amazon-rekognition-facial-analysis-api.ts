import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionFacialAnalysisApi = {
  RekognitionServiceCompareFaces: "RekognitionService.CompareFaces",
} as const;
export type XAmzTargetAmazonRekognitionFacialAnalysisApi =
  | (typeof XAmzTargetAmazonRekognitionFacialAnalysisApi)[keyof typeof XAmzTargetAmazonRekognitionFacialAnalysisApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionFacialAnalysisApiSchema: EnumSchema<XAmzTargetAmazonRekognitionFacialAnalysisApi> =
  s.enumOf<XAmzTargetAmazonRekognitionFacialAnalysisApi>(XAmzTargetAmazonRekognitionFacialAnalysisApi);
