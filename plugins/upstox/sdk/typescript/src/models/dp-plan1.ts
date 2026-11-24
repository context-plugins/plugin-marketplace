import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DP charges related information */
export type DpPlan1 = {
  /** Name */
  name?: string;
  /** Minimum expense charges */
  minExpense?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dpPlan1Schema: Schema<DpPlan1> = s.object<DpPlan1>(
  {
    name: s.optional(s.string()),
    minExpense: s.optional(s.float64()),
    _keysMap: {
      minExpense: "min_expense",
    },
  },
  { additionalProperties: s.json() },
);
