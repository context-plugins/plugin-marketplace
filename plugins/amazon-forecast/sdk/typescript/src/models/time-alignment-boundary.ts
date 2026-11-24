import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";
import { monthSchema, type Month } from "./month.js";

export type TimeAlignmentBoundary = {
  /** The month to use for time alignment during aggregation. The month must be in uppercase. */
  month?: Month;
  /** The day of the month to use for time alignment during aggregation. */
  dayOfMonth?: number;
  /** The day of week to use for time alignment during aggregation. The day must be in uppercase. */
  dayOfWeek?: DayOfWeek;
  /** The hour of day to use for time alignment during aggregation. */
  hour?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeAlignmentBoundarySchema: Schema<TimeAlignmentBoundary> = s.object<TimeAlignmentBoundary>(
  {
    month: s.optional(s.lazy(() => monthSchema)),
    dayOfMonth: s.optional(s.int()),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
    hour: s.optional(s.int()),
    _keysMap: {
      month: "Month",
      dayOfMonth: "DayOfMonth",
      dayOfWeek: "DayOfWeek",
      hour: "Hour",
    },
  },
  { additionalProperties: s.json() },
);
