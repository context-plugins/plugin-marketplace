import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DpPlan = {
  /** Name */
  name?: string;
  /** Minimum expense charges */
  minExpense?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dpPlanSchema: Schema<DpPlan> = s.object<DpPlan>(
  {
    name: s.optional(s.string()),
    minExpense: s.optional(s.float64()),
    _keysMap: {
      minExpense: "min_expense",
    },
  },
  { additionalProperties: s.json() },
);
