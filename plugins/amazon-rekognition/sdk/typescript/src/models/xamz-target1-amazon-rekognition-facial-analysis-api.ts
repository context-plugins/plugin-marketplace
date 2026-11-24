import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionFacialAnalysisApi = {
  RekognitionServiceDetectFaces: "RekognitionService.DetectFaces",
} as const;
export type XAmzTarget1AmazonRekognitionFacialAnalysisApi =
  | (typeof XAmzTarget1AmazonRekognitionFacialAnalysisApi)[keyof typeof XAmzTarget1AmazonRekognitionFacialAnalysisApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionFacialAnalysisApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionFacialAnalysisApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionFacialAnalysisApi>(XAmzTarget1AmazonRekognitionFacialAnalysisApi);
