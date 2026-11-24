import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort to use for elements in the ModerationLabelDetections array. Use TIMESTAMP to sort array
 * elements by the time labels are detected. Use NAME to alphabetically group elements for a label
 * together. Within each label group, the array element are sorted by detection confidence. The
 * default sort is by TIMESTAMP.
 */
export const SortByAmazonRekognitionContentModerationApi = {
  Name: "NAME",
  Timestamp: "TIMESTAMP",
} as const;
export type SortByAmazonRekognitionContentModerationApi =
  | (typeof SortByAmazonRekognitionContentModerationApi)[keyof typeof SortByAmazonRekognitionContentModerationApi]
  | (string & {});

export const sortByAmazonRekognitionContentModerationApiSchema: EnumSchema<SortByAmazonRekognitionContentModerationApi> =
  s.enumOf<SortByAmazonRekognitionContentModerationApi>(SortByAmazonRekognitionContentModerationApi);
