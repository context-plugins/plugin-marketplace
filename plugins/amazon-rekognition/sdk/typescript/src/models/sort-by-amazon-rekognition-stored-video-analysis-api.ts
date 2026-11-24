import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort to use for elements in the Labels array. Use TIMESTAMP to sort array elements by the time
 * labels are detected. Use NAME to alphabetically group elements for a label together. Within each
 * label group, the array element are sorted by detection confidence. The default sort is by
 * TIMESTAMP.
 */
export const SortByAmazonRekognitionStoredVideoAnalysisApi = {
  Name: "NAME",
  Timestamp: "TIMESTAMP",
} as const;
export type SortByAmazonRekognitionStoredVideoAnalysisApi =
  | (typeof SortByAmazonRekognitionStoredVideoAnalysisApi)[keyof typeof SortByAmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const sortByAmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<SortByAmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<SortByAmazonRekognitionStoredVideoAnalysisApi>(SortByAmazonRekognitionStoredVideoAnalysisApi);
