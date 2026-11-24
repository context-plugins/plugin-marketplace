import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Period for scheduling a recurring bill. */
export const PeriodResponse = {
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
  None: "NONE",
  Undefined: "UNDEFINED",
} as const;
export type PeriodResponse = (typeof PeriodResponse)[keyof typeof PeriodResponse] | (string & {});

export const periodResponseSchema: EnumSchema<PeriodResponse> = s.enumOf<PeriodResponse>(PeriodResponse);
