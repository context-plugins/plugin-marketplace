import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** relative only: the unit of the rolling window. */
export const CustomViewSummaryPeriodUnit = {
  Day: "day",
  Month: "month",
  Year: "year",
} as const;
export type CustomViewSummaryPeriodUnit =
  | (typeof CustomViewSummaryPeriodUnit)[keyof typeof CustomViewSummaryPeriodUnit]
  | (string & {});

export const customViewSummaryPeriodUnitSchema: EnumSchema<CustomViewSummaryPeriodUnit> =
  s.enumOf<CustomViewSummaryPeriodUnit>(CustomViewSummaryPeriodUnit);
