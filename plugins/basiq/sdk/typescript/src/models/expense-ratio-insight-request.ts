import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExpenseRatioInsightRequest = {
  /** The expense value to calculate the ratio against income (ME040 Average Monthly Credit) */
  expense: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expenseRatioInsightRequestSchema: Schema<ExpenseRatioInsightRequest> =
  s.object<ExpenseRatioInsightRequest>(
    {
      expense: s.string(),
    },
    { additionalProperties: s.json() },
  );
