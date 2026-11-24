import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Previous3Months = {
  /**
   * Median regular income amount - calculated across all occurrences in last 3 months (note: median
   * provides a more reliable amount than mean for a regular income source as it is less affected by
   * outliers and skewed data - use variance amount to understand outliers and changeHistory to view
   * actual credits)
   */
  amountAvg: string;
  /** Median monthly regular income amount */
  amountAvgMonthly: string;
  /** Difference between min and max payment amount for regular income */
  variance: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const previous3MonthsSchema: Schema<Previous3Months> = s.object<Previous3Months>(
  {
    amountAvg: s.string(),
    amountAvgMonthly: s.string(),
    variance: s.string(),
  },
  { additionalProperties: s.json() },
);
