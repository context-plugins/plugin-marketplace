import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered
 * faces aren't searched for in the collection. The default value is NONE.
 */
export const QualityFilterAmazonRekognitionUserApi = {
  None: "NONE",
  Auto: "AUTO",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type QualityFilterAmazonRekognitionUserApi =
  | (typeof QualityFilterAmazonRekognitionUserApi)[keyof typeof QualityFilterAmazonRekognitionUserApi]
  | (string & {});

export const qualityFilterAmazonRekognitionUserApiSchema: EnumSchema<QualityFilterAmazonRekognitionUserApi> =
  s.enumOf<QualityFilterAmazonRekognitionUserApi>(QualityFilterAmazonRekognitionUserApi);
