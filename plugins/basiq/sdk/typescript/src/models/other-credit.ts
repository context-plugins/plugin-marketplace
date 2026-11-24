import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  changeHistoryAffordabilityIncomeApiSchema,
  type ChangeHistoryAffordabilityIncomeApi,
} from "./change-history-affordability-income-api.js";
import { current2Schema, type Current2 } from "./current2.js";
import { frequency1Schema, type Frequency1 } from "./frequency1.js";

/**
 * Other Credit Series are series where a pattern of credit is detected but the pattern does not
 * meet the requirements for regular or irregular income, or the income series is too old e.g.
 * former regular income or a potential future income
 */
export type OtherCredit = {
  /**
   * Duration other income (number days from first to last occurrence) returned as an integer with
   * values zero or greater.
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
  current: Current2;
  /** Frequency is "other", "irregular" or a time period e.g. "bi-weekly" */
  frequency: Frequency1;
  /** Number of instances of credits in the series. */
  noOccurrences: number;
  /** Source Other Credit income (cleaned transaction description). */
  source: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherCreditSchema: Schema<OtherCredit> = s.object<OtherCredit>(
  {
    ageDays: s.int(),
    amountAvg: s.string(),
    avgMonthlyOccurence: s.string(),
    changeHistory: s.array(s.lazy(() => changeHistoryAffordabilityIncomeApiSchema)),
    current: current2Schema,
    frequency: frequency1Schema,
    noOccurrences: s.int(),
    source: s.string(),
  },
  { additionalProperties: s.json() },
);
