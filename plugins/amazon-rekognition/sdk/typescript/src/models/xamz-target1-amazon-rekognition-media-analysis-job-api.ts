import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionMediaAnalysisJobApi = {
  RekognitionServiceListMediaAnalysisJobs: "RekognitionService.ListMediaAnalysisJobs",
} as const;
export type XAmzTarget1AmazonRekognitionMediaAnalysisJobApi =
  | (typeof XAmzTarget1AmazonRekognitionMediaAnalysisJobApi)[keyof typeof XAmzTarget1AmazonRekognitionMediaAnalysisJobApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionMediaAnalysisJobApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionMediaAnalysisJobApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionMediaAnalysisJobApi>(XAmzTarget1AmazonRekognitionMediaAnalysisJobApi);
