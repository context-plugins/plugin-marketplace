import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required when type is EXPENSE_RATIO_VERIFICATION. */
export type ExpenseRatioData = {
  /**
   * The expense value (as a numeric string) to calculate the ratio against income (ME040 Average
   * Monthly Credit). Must be a positive numeric string.
   */
  expense: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expenseRatioDataSchema: Schema<ExpenseRatioData> = s.object<ExpenseRatioData>(
  {
    expense: s.string(),
  },
  { additionalProperties: s.json() },
);
