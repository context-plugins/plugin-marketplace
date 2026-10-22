import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./unions/active.js";
import { dailyEndTime1Schema, type DailyEndTime1 } from "./unions/daily-end-time1.js";
import { dailyStartTime1Schema, type DailyStartTime1 } from "./unions/daily-start-time1.js";
import { maxDailyCalls1Schema, type MaxDailyCalls1 } from "./unions/max-daily-calls1.js";

/**
 * Outreach window and/or daily cap for one weekday or one calendar date.
 *
 * Every field may be omitted, and an omitted field inherits the campaign default: an override that
 * only sets ``max_daily_calls`` keeps the campaign window, and one that only sets the times keeps
 * the campaign cap. ``max_daily_calls: 0`` is not inheritance -- it is an explicit "no outreach on
 * this day", which is the shape the Outbound Scheduler daily_limit config already uses. It closes
 * the day for retries as well as for first attempts, the same way ``active: false`` does; a
 * non-zero maximum bounds first attempts only and lets retries run on.
 */
export type ScheduleOverride = {
  /**
   * Whether the campaign does outreach on this day. Omitted inherits: a weekday rule inherits from
   * active_days, a date rule inherits from the weekday rule. Set it to false to close one date, for
   * example a holiday, without a change to active_days.
   */
  active?: Active;
  /** Start time on this day. Omitted keeps the campaign start time. */
  dailyStartTime?: DailyStartTime1;
  /** End time on this day. Omitted keeps the campaign end time. */
  dailyEndTime?: DailyEndTime1;
  /**
   * Maximum number of unique reference IDs that get outreach on this day. Omitted keeps the
   * campaign maximum. Retries do not count towards it and keep dialing once it is reached. 0 is
   * different: it closes the day for all outreach, retries included.
   */
  maxDailyCalls?: MaxDailyCalls1;
};

export const scheduleOverrideSchema: Schema<ScheduleOverride> = s.object<ScheduleOverride>({
  active: s.optional(s.lazy(() => activeSchema)),
  dailyStartTime: s.optional(s.lazy(() => dailyStartTime1Schema)),
  dailyEndTime: s.optional(s.lazy(() => dailyEndTime1Schema)),
  maxDailyCalls: s.optional(s.lazy(() => maxDailyCalls1Schema)),
  _keysMap: {
    dailyStartTime: "daily_start_time",
    dailyEndTime: "daily_end_time",
    maxDailyCalls: "max_daily_calls",
  },
});
