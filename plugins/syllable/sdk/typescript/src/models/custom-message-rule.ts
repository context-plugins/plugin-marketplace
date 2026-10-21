import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateModelSchema, type DateModel } from "./unions/date-model.js";
import { daysOfWeekSchema, type DaysOfWeek } from "./unions/days-of-week.js";
import { holidaysSchema, type Holidays } from "./unions/holidays.js";
import { timeRangeEndSchema, type TimeRangeEnd } from "./unions/time-range-end.js";
import { timeRangeStartSchema, type TimeRangeStart } from "./unions/time-range-start.js";

/**
 * A rule used to determine whether a custom message should present a variant message based on the
 * current timestamp.
 */
export type CustomMessageRule = {
  /** The description of the rule */
  description: string;
  /**
   * The start of the time range for the rule in 24-hour format hh:mm (should be null for "all day"
   * cases)
   */
  timeRangeStart?: TimeRangeStart;
  /**
   * The end of the time range for the rule in 24-hour format hh:mm (should be null for "all day"
   * cases)
   */
  timeRangeEnd?: TimeRangeEnd;
  /** The date for the rule in YYYY-MM-DD format */
  date?: DateModel;
  /**
   * Named holidays for the rule. Matches if the current date is any of them, resolved in the
   * assigned agent timezone, so no per-year rule is needed. Accepts the same names the \@hours rule
   * engine accepts and stores them canonically.
   */
  holidays?: Holidays;
  /** The days of the week for the rule */
  daysOfWeek?: DaysOfWeek;
  /** Whether the rule logic should be inverted (i.e. "not") */
  invert: boolean;
  /** Message text associated with the rule */
  text: string;
};

export const customMessageRuleSchema: Schema<CustomMessageRule> = s.object<CustomMessageRule>({
  description: s.string(),
  timeRangeStart: s.optional(s.lazy(() => timeRangeStartSchema)),
  timeRangeEnd: s.optional(s.lazy(() => timeRangeEndSchema)),
  date: s.optional(s.lazy(() => dateModelSchema)),
  holidays: s.optional(s.lazy(() => holidaysSchema)),
  daysOfWeek: s.optional(s.lazy(() => daysOfWeekSchema)),
  invert: s.boolean(),
  text: s.string(),
  _keysMap: {
    timeRangeStart: "time_range_start",
    timeRangeEnd: "time_range_end",
    daysOfWeek: "days_of_week",
  },
});
