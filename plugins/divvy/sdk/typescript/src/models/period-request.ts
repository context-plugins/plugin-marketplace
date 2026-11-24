import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Period for scheduling a recurring bill. */
export const PeriodRequest = {
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
  None: "NONE",
} as const;
export type PeriodRequest = (typeof PeriodRequest)[keyof typeof PeriodRequest] | (string & {});

export const periodRequestSchema: EnumSchema<PeriodRequest> = s.enumOf<PeriodRequest>(PeriodRequest);
