import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reset cadence for counted usage. */
export type PlatformPeriod1 = {
  /** Kind of usage period. @default "RECURRING_CALENDAR_MONTH" */
  type?: "RECURRING_CALENDAR_MONTH";
};

export const platformPeriod1Schema: Schema<PlatformPeriod1> = s.object<PlatformPeriod1>({
  type: s.defaulted(s.literal("RECURRING_CALENDAR_MONTH"), "RECURRING_CALENDAR_MONTH"),
});
