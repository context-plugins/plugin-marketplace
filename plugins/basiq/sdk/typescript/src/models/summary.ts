import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary totals relating to income analysis */
export type Summary = {
  /**
   * Total mean of irregular income monthly calculated across the whole time period for all
   * irregular sources
   */
  irregularIncomeAvg: string | null;
  /**
   * Total median regular income monthly calculated over the past 3 months for all regular sources
   */
  regularIncomeAvg: string | null;
  /** Total regular income so far this financial year (year to date) */
  regularIncomeYtd: string | null;
  /** Coming soon: total predicted regular income for this financial year */
  regularIncomeYear: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySchema: Schema<Summary> = s.object<Summary>(
  {
    irregularIncomeAvg: s.nullable(s.string()),
    regularIncomeAvg: s.nullable(s.string()),
    regularIncomeYtd: s.nullable(s.string()),
    regularIncomeYear: s.nullable(s.string()),
    _keysMap: {
      regularIncomeYtd: "regularIncomeYTD",
    },
  },
  { additionalProperties: s.json() },
);
