import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Class representing spent amounts for a budget period. */
export type BudgetPeriodSpentAmountsDto = {
  /** Sum of cleared transactions */
  cleared?: number;
  /** Sum of pending transactions */
  pending?: number;
  /** Sum of all transactions (`cleared + pending`) */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetPeriodSpentAmountsDtoSchema: Schema<BudgetPeriodSpentAmountsDto> =
  s.object<BudgetPeriodSpentAmountsDto>(
    {
      cleared: s.optional(s.float64()),
      pending: s.optional(s.float64()),
      total: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
