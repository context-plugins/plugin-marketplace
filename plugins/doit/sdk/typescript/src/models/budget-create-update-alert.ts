import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Threshold settings for budget alerts. */
export type BudgetCreateUpdateAlert = {
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetCreateUpdateAlertSchema: Schema<BudgetCreateUpdateAlert> =
  s.object<BudgetCreateUpdateAlert>(
    {
      percentage: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
