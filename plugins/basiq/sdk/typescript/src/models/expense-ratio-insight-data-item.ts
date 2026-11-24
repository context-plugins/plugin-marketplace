import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputSchema, type Input } from "./input.js";
import { resultSchema, type Result } from "./result.js";

export type ExpenseRatioInsightDataItem = {
  /** Echo of the input parameters */
  input: Input;
  /** Result containing the expense ratio range */
  result: Result;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expenseRatioInsightDataItemSchema: Schema<ExpenseRatioInsightDataItem> =
  s.object<ExpenseRatioInsightDataItem>(
    {
      input: inputSchema,
      result: resultSchema,
    },
    { additionalProperties: s.json() },
  );
