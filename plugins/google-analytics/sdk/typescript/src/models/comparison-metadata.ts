import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The metadata for a single comparison. */
export type ComparisonMetadata = {
  /**
   * This comparison's resource name. Useable in [Comparison](#Comparison)'s `comparison` field. For
   * example, 'comparisons/1234'.
   */
  apiName?: string;
  /** This comparison's description. */
  description?: string;
  /** This comparison's name within the Google Analytics user interface. */
  uiName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const comparisonMetadataSchema: Schema<ComparisonMetadata> = s.object<ComparisonMetadata>(
  {
    apiName: s.optional(s.string()),
    description: s.optional(s.string()),
    uiName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
