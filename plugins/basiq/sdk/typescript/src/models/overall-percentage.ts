import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OverallPercentage = {
  /** Percentage of credit transactions */
  credit?: number;
  /** Percentage of debit transactions */
  debit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const overallPercentageSchema: Schema<OverallPercentage> = s.object<OverallPercentage>(
  {
    credit: s.optional(s.float64()),
    debit: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
