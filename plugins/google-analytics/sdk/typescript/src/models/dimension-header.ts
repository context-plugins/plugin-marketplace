import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Describes a dimension column in the report. Dimensions requested in a report produce column
 * entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or
 * expressions do not produce columns in a report; correspondingly, those dimensions do not produce
 * headers.
 */
export type DimensionHeader = {
  /** The dimension's name. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionHeaderSchema: Schema<DimensionHeader> = s.object<DimensionHeader>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
