import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incomeSchema, type Income } from "./income.js";

export type IncomeInsightRequest = {
  /** Income range to verify */
  income: Income;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeInsightRequestSchema: Schema<IncomeInsightRequest> = s.object<IncomeInsightRequest>(
  {
    income: incomeSchema,
  },
  { additionalProperties: s.json() },
);
