import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** relative only: the unit of the rolling window. */
export const CustomViewDetailPeriodUnit = {
  Day: "day",
  Month: "month",
  Year: "year",
} as const;
export type CustomViewDetailPeriodUnit =
  | (typeof CustomViewDetailPeriodUnit)[keyof typeof CustomViewDetailPeriodUnit]
  | (string & {});

export const customViewDetailPeriodUnitSchema: EnumSchema<CustomViewDetailPeriodUnit> =
  s.enumOf<CustomViewDetailPeriodUnit>(CustomViewDetailPeriodUnit);
