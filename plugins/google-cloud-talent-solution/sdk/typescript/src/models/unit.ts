import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED. */
export const Unit = {
  CompensationUnitUnspecified: "COMPENSATION_UNIT_UNSPECIFIED",
  Hourly: "HOURLY",
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
  OneTime: "ONE_TIME",
  OtherCompensationUnit: "OTHER_COMPENSATION_UNIT",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
