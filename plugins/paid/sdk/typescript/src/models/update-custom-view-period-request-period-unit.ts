import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** relative only: the unit of the rolling window. */
export const UpdateCustomViewPeriodRequestPeriodUnit = {
  Day: "day",
  Month: "month",
  Year: "year",
} as const;
export type UpdateCustomViewPeriodRequestPeriodUnit =
  | (typeof UpdateCustomViewPeriodRequestPeriodUnit)[keyof typeof UpdateCustomViewPeriodRequestPeriodUnit]
  | (string & {});

export const updateCustomViewPeriodRequestPeriodUnitSchema: EnumSchema<UpdateCustomViewPeriodRequestPeriodUnit> =
  s.enumOf<UpdateCustomViewPeriodRequestPeriodUnit>(UpdateCustomViewPeriodRequestPeriodUnit);
