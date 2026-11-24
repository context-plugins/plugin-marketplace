import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rangeSchema, type Range } from "./range.js";

/** Result containing the expense ratio range */
export type Result = {
  /**
   * Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income
   * Exceeded' indicates ratio greater than 100%.
   */
  range: Range;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    range: rangeSchema,
  },
  { additionalProperties: s.json() },
);
