import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort to use for grouping faces in the response. Use TIMESTAMP to group faces by the time that
 * they are recognized. Use INDEX to sort by recognized faces.
 */
export const SortByAmazonRekognitionFaceSearchApi = {
  Index: "INDEX",
  Timestamp: "TIMESTAMP",
} as const;
export type SortByAmazonRekognitionFaceSearchApi =
  | (typeof SortByAmazonRekognitionFaceSearchApi)[keyof typeof SortByAmazonRekognitionFaceSearchApi]
  | (string & {});

export const sortByAmazonRekognitionFaceSearchApiSchema: EnumSchema<SortByAmazonRekognitionFaceSearchApi> =
  s.enumOf<SortByAmazonRekognitionFaceSearchApi>(SortByAmazonRekognitionFaceSearchApi);
