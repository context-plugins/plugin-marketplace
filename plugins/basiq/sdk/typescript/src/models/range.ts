import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income
 * Exceeded' indicates ratio greater than 100%.
 */
export const Range = {
  _0To10: "0% to 10%",
  _10To20: "10% to 20%",
  _20To30: "20% to 30%",
  _30To40: "30% to 40%",
  _40To50: "40% to 50%",
  _50To60: "50% to 60%",
  _60To70: "60% to 70%",
  _70To80: "70% to 80%",
  _80To90: "80% to 90%",
  _90To100: "90% to 100%",
  IncomeExceeded: "Income Exceeded",
} as const;
export type Range = (typeof Range)[keyof typeof Range] | (string & {});

export const rangeSchema: EnumSchema<Range> = s.enumOf<Range>(Range);
