import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Income range to verify */
export type Income = {
  /** Minimum income value as a numeric string */
  min: string;
  /** Maximum income value as a numeric string */
  max?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeSchema: Schema<Income> = s.object<Income>(
  {
    min: s.string(),
    max: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
