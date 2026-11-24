import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SortOptions = {
  /** `"relevance"` or `"date"`. */
  field?: string | null;
  /** `"asc"` or `"desc"`. */
  order?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sortOptionsSchema: Schema<SortOptions> = s.object<SortOptions>(
  {
    field: s.optionalNullable(s.string()),
    order: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
