import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Balance3 = {
  /** Minimum balance threshold as a numeric string. */
  min: string;
  /** Maximum balance threshold as a numeric string. Optional. */
  max?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balance3Schema: Schema<Balance3> = s.object<Balance3>(
  {
    min: s.string(),
    max: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
