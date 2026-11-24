import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The month to use for time alignment during aggregation. The month must be in uppercase. */
export const Month = {
  January: "JANUARY",
  February: "FEBRUARY",
  March: "MARCH",
  April: "APRIL",
  May: "MAY",
  June: "JUNE",
  July: "JULY",
  August: "AUGUST",
  September: "SEPTEMBER",
  October: "OCTOBER",
  November: "NOVEMBER",
  December: "DECEMBER",
} as const;
export type Month = (typeof Month)[keyof typeof Month] | (string & {});

export const monthSchema: EnumSchema<Month> = s.enumOf<Month>(Month);
