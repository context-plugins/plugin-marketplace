import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** relative only: the unit of the rolling window. */
export const CreateCustomViewRequestPeriodUnit = {
  Day: "day",
  Month: "month",
  Year: "year",
} as const;
export type CreateCustomViewRequestPeriodUnit =
  | (typeof CreateCustomViewRequestPeriodUnit)[keyof typeof CreateCustomViewRequestPeriodUnit]
  | (string & {});

export const createCustomViewRequestPeriodUnitSchema: EnumSchema<CreateCustomViewRequestPeriodUnit> =
  s.enumOf<CreateCustomViewRequestPeriodUnit>(CreateCustomViewRequestPeriodUnit);
