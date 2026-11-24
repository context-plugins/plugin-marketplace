import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Unit1 = {
  CompensationUnitUnspecified: "COMPENSATION_UNIT_UNSPECIFIED",
  Hourly: "HOURLY",
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
  OneTime: "ONE_TIME",
  OtherCompensationUnit: "OTHER_COMPENSATION_UNIT",
} as const;
export type Unit1 = (typeof Unit1)[keyof typeof Unit1] | (string & {});

export const unit1Schema: EnumSchema<Unit1> = s.enumOf<Unit1>(Unit1);
