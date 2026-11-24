import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Income1 = {
  /** Minimum income threshold as a numeric string. */
  min: string;
  /** Maximum income threshold as a numeric string. Optional. */
  max?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const income1Schema: Schema<Income1> = s.object<Income1>(
  {
    min: s.string(),
    max: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
