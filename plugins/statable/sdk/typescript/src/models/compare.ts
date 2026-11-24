import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Compare = {
  value?: number;
  change?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compareSchema: Schema<Compare> = s.object<Compare>(
  {
    value: s.optional(s.float64()),
    change: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
