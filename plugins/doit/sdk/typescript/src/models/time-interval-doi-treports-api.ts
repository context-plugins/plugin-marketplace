import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time interval for grouping data in the report. */
export const TimeIntervalDoiTReportsApi = {
  Hour: "hour",
  Day: "day",
  DayCumSum: "dayCumSum",
  Week: "week",
  Isoweek: "isoweek",
  Month: "month",
  Quarter: "quarter",
  Year: "year",
  WeekDay: "week_day",
} as const;
export type TimeIntervalDoiTReportsApi =
  | (typeof TimeIntervalDoiTReportsApi)[keyof typeof TimeIntervalDoiTReportsApi]
  | (string & {});

export const timeIntervalDoiTReportsApiSchema: EnumSchema<TimeIntervalDoiTReportsApi> =
  s.enumOf<TimeIntervalDoiTReportsApi>(TimeIntervalDoiTReportsApi);
