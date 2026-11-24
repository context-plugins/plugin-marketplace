import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Value = {
  /** The reporting article's id */
  id?: string;
  /** The reporting source's name */
  source?: string | null;
  /** The figure in absolute base units */
  normalizedValue?: number;
  /** The figure as originally stated */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueSchema: Schema<Value> = s.object<Value>(
  {
    id: s.optional(s.string()),
    source: s.optionalNullable(s.string()),
    normalizedValue: s.optional(s.float64()),
    value: s.optional(s.string()),
    _keysMap: {
      normalizedValue: "normalized_value",
    },
  },
  { additionalProperties: s.json() },
);
