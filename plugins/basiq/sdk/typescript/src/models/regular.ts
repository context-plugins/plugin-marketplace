import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  changeHistoryAffordabilityIncomeApiSchema,
  type ChangeHistoryAffordabilityIncomeApi,
} from "./change-history-affordability-income-api.js";
import { currentSchema, type Current } from "./current.js";
import { frequencySchema, type Frequency } from "./frequency.js";
import { irregularitySchema, type Irregularity } from "./irregularity.js";
import { previous3MonthsSchema, type Previous3Months } from "./previous3-months.js";

/**
 * RegularSource Our complex income algorithm uses over 50 rules to identify different types of
 * income sources. For example, to identify a regular income source - the fortnightly salary should
 * have a minimum of 5 credits across a 90 day time period with regular intervals. Additionally,
 * tolerances are applied based on confidence in identified income source patterns (by amount and
 * frequency).
 */
export type Regular = {
  /** Source regular income (cleaned transaction description). */
  source: string;
  /**
   * Duration regular income (number days from first to last occurrence) returned as an integer with
   * values zero or greater
   */
  ageDays: number;
  /**
   * Each amount classified as income (repeated for each income credit and ordered by most recent)
   */
  changeHistory: ChangeHistoryAffordabilityIncomeApi[];
  current: Current;
  /** Enum detailing frequency regular income */
  frequency: Frequency;
  irregularity: Irregularity;
  previous3Months: Previous3Months;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regularSchema: Schema<Regular> = s.object<Regular>(
  {
    source: s.string(),
    ageDays: s.int(),
    changeHistory: s.array(s.lazy(() => changeHistoryAffordabilityIncomeApiSchema)),
    current: currentSchema,
    frequency: frequencySchema,
    irregularity: irregularitySchema,
    previous3Months: previous3MonthsSchema,
  },
  { additionalProperties: s.json() },
);
