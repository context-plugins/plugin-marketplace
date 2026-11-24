import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionMediaAnalysisJobApi = {
  RekognitionServiceStartMediaAnalysisJob: "RekognitionService.StartMediaAnalysisJob",
} as const;
export type XAmzTarget2AmazonRekognitionMediaAnalysisJobApi =
  | (typeof XAmzTarget2AmazonRekognitionMediaAnalysisJobApi)[keyof typeof XAmzTarget2AmazonRekognitionMediaAnalysisJobApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionMediaAnalysisJobApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionMediaAnalysisJobApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionMediaAnalysisJobApi>(XAmzTarget2AmazonRekognitionMediaAnalysisJobApi);
