import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi = {
  RekognitionServiceStartLabelDetection: "RekognitionService.StartLabelDetection",
} as const;
export type XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi =
  | (typeof XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi)[keyof typeof XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi>(
    XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi,
  );
