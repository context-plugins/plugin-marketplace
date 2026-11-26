import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Value = {
  /** Previous value */
  previous?: string;
  /** Current value */
  current?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueSchema: Schema<Value> = s.object<Value>(
  {
    previous: s.optional(s.string()),
    current: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
