import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort to use for elements in the Persons array. Use TIMESTAMP to sort array elements by the time
 * persons are detected. Use INDEX to sort by the tracked persons. If you sort by INDEX, the array
 * elements for each person are sorted by detection confidence. The default sort is by TIMESTAMP.
 */
export const SortByAmazonRekognitionOperationsApi = {
  Index: "INDEX",
  Timestamp: "TIMESTAMP",
} as const;
export type SortByAmazonRekognitionOperationsApi =
  | (typeof SortByAmazonRekognitionOperationsApi)[keyof typeof SortByAmazonRekognitionOperationsApi]
  | (string & {});

export const sortByAmazonRekognitionOperationsApiSchema: EnumSchema<SortByAmazonRekognitionOperationsApi> =
  s.enumOf<SortByAmazonRekognitionOperationsApi>(SortByAmazonRekognitionOperationsApi);
