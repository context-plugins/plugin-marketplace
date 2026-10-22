import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleOverrideSchema, type ScheduleOverride } from "./schedule-override.js";

/**
 * Weekday- and date-specific outreach rules for a campaign.
 *
 * The most specific rule wins: a rule for the calendar date, then a rule for the weekday, then the
 * campaign defaults (``daily_start_time`` / ``daily_end_time`` / ``max_daily_calls`` /
 * ``active_days``). Resolution is per field, so a date rule that only moves the end time still uses
 * the weekday cap. All days, dates and times are in the time zone of the agent the campaign dials
 * from -- see ``lib.outbound.schedule``.
 */
export type OutreachOverrideRules = {
  /**
   * Rules by weekday. Full names (monday) and short names (mon) are both accepted; they are stored
   * as short names. Days that are absent use the campaign defaults.
   */
  days?: Record<string, ScheduleOverride>;
  /**
   * Rules by calendar date, keyed YYYY-MM-DD. A date rule wins over the weekday rule for that date.
   */
  dates?: Record<string, ScheduleOverride>;
};

export const outreachOverrideRulesSchema: Schema<OutreachOverrideRules> = s.object<OutreachOverrideRules>({
  days: s.optional(
    s.record(
      s.string(),
      s.lazy(() => scheduleOverrideSchema),
    ),
  ),
  dates: s.optional(
    s.record(
      s.string(),
      s.lazy(() => scheduleOverrideSchema),
    ),
  ),
});
