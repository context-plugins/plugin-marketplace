import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand */
export const RunningNumberType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
} as const;
export type RunningNumberType = (typeof RunningNumberType)[keyof typeof RunningNumberType] | (number & {});

export const runningNumberTypeSchema: EnumSchema<RunningNumberType> =
  s.enumOf<RunningNumberType>(RunningNumberType);
