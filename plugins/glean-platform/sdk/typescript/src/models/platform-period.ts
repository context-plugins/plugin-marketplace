import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Period over which usage is counted for a limit. */
export type PlatformPeriod = {
  /** Kind of usage period. @default "RECURRING_CALENDAR_MONTH" */
  type?: "RECURRING_CALENDAR_MONTH";
};

export const platformPeriodSchema: Schema<PlatformPeriod> = s.object<PlatformPeriod>({
  type: s.defaulted(s.literal("RECURRING_CALENDAR_MONTH"), "RECURRING_CALENDAR_MONTH"),
});
