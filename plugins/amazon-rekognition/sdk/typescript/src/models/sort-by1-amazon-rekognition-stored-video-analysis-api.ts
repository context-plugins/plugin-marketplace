import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The sorting method chosen for a GetLabelDetection request. */
export const SortBy1AmazonRekognitionStoredVideoAnalysisApi = {
  Name: "NAME",
  Timestamp: "TIMESTAMP",
} as const;
export type SortBy1AmazonRekognitionStoredVideoAnalysisApi =
  | (typeof SortBy1AmazonRekognitionStoredVideoAnalysisApi)[keyof typeof SortBy1AmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const sortBy1AmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<SortBy1AmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<SortBy1AmazonRekognitionStoredVideoAnalysisApi>(SortBy1AmazonRekognitionStoredVideoAnalysisApi);
