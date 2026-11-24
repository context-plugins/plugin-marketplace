import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = CurrentMonth 3 = PreviousMonth 5 = Manual 7 = CurrentYear 9 = PreviousYear 11 = AsAt 13 =
 * Grid 15 = FiscalYear 17 = Months 19 = Days
 */
export const DataRange = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
  _17: 17,
  _19: 19,
} as const;
export type DataRange = (typeof DataRange)[keyof typeof DataRange] | (number & {});

export const dataRangeSchema: EnumSchema<DataRange> = s.enumOf<DataRange>(DataRange);
