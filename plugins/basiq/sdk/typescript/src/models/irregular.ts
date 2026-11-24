import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  changeHistoryAffordabilityIncomeApiSchema,
  type ChangeHistoryAffordabilityIncomeApi,
} from "./change-history-affordability-income-api.js";
import { current1Schema, type Current1 } from "./current1.js";

/**
 * IrregularSource Income sources typically require at least 5 credits across a minimum 90 day time
 * period
 */
export type Irregular = {
  /**
   * Duration irregular income (number days from first to last occurrence) returned as an integer
   * with values zero or greater.
   */
  ageDays: number;
  /** Mean of irregular income amount - calculated across all occurrences identified. */
  amountAvg: string;
  /** Average (mean) number of times per calendar month the credits in the series occur. */
  avgMonthlyOccurence: string;
  /**
   * Each amount classified as income (repeated for each income credit and ordered by most recent)
   */
  changeHistory: ChangeHistoryAffordabilityIncomeApi[];
  current: Current1;
  /** Frequency is "irregular" */
  frequency: string;
  /** Number of instances of credits in the series. */
  noOccurrences: number;
  /** Source irregular income (cleaned transaction description). */
  source: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const irregularSchema: Schema<Irregular> = s.object<Irregular>(
  {
    ageDays: s.int(),
    amountAvg: s.string(),
    avgMonthlyOccurence: s.string(),
    changeHistory: s.array(s.lazy(() => changeHistoryAffordabilityIncomeApiSchema)),
    current: current1Schema,
    frequency: s.string(),
    noOccurrences: s.int(),
    source: s.string(),
  },
  { additionalProperties: s.json() },
);
