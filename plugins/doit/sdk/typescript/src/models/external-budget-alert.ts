import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Budget alert status details. */
export type ExternalBudgetAlert = {
  forecastedDate?: number;
  percentage?: number;
  triggered?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalBudgetAlertSchema: Schema<ExternalBudgetAlert> = s.object<ExternalBudgetAlert>(
  {
    forecastedDate: s.optional(s.int()),
    percentage: s.optional(s.float64()),
    triggered: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
