import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subCategorySchema, type SubCategory } from "./sub-category.js";

/** Payments Summary */
export type Payment = {
  /**
   * Average monthly amount by category for defined period (up to 13 months). This number monthly is
   * calculated as follows: (Total Expenses/Report Coverage Days)*30. This allows data with partial
   * months to be calculated correctly.
   */
  avgMonthly: string;
  /**
   * Top level summary: category name. e.g. Medical care and heath expenses, Food and non-alcoholic
   * beverages, Education
   */
  division: string;
  /** Average monthly amount expressed as a percentage of total expenses. */
  percentageTotal: number;
  subCategory: SubCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>(
  {
    avgMonthly: s.string(),
    division: s.string(),
    percentageTotal: s.float64(),
    subCategory: s.array(s.lazy(() => subCategorySchema)),
  },
  { additionalProperties: s.json() },
);
