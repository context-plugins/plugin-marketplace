import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { daysOfWeekSchema, type DaysOfWeek } from "./days-of-week.js";
import { monthSchema, type Month } from "./month.js";

export type Timetable = {
  /** Number of times per hour to trigger */
  perHour: number;
  /** Hours of the day to trigger (UTC) */
  hoursOfDay: number[];
  /** Days of the week to trigger */
  daysOfWeek: DaysOfWeek[];
  /** Days of the month to trigger */
  daysOfMonth?: number[];
  /** Months to trigger */
  months?: Month[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const timetableProperties: s.Shape<Timetable> = {
  perHour: s.int(),
  hoursOfDay: s.array(s.int()),
  daysOfWeek: s.array(s.lazy(() => daysOfWeekSchema)),
  daysOfMonth: s.optional(s.array(s.int())),
  months: s.optional(s.array(s.lazy(() => monthSchema))),
  _keysMap: {
    perHour: "per-hour",
    hoursOfDay: "hours-of-day",
    daysOfWeek: "days-of-week",
    daysOfMonth: "days-of-month",
  },
};

export const timetableInternalSchema: Schema<Timetable> = s.object<Timetable>(timetableProperties, {
  additionalProperties: s.json(),
});

export const timetableSchema: Schema<Timetable> = s.lazySchema(() =>
  s.object<Timetable>(
    {
      ...timetableProperties,
      perHour: s.int().check(s.gte(1), s.lte(60)),
      hoursOfDay: s.array(s.int().check(s.gte(0), s.lte(23))),
      daysOfMonth: s.optional(s.array(s.int().check(s.gte(1), s.lte(31)))),
    },
    { additionalProperties: s.json() },
  ),
);
