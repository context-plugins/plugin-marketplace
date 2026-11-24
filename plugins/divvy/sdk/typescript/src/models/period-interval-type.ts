import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** PeriodIntervalType. */
export const PeriodIntervalType = {
  None: "NONE",
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Quarterly: "QUARTERLY",
  Yearly: "YEARLY",
} as const;
export type PeriodIntervalType = (typeof PeriodIntervalType)[keyof typeof PeriodIntervalType] | (string & {});

export const periodIntervalTypeSchema: EnumSchema<PeriodIntervalType> =
  s.enumOf<PeriodIntervalType>(PeriodIntervalType);
