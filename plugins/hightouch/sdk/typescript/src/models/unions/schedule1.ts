import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cronScheduleSchema, type CronSchedule } from "../cron-schedule.js";
import { dbtScheduleSchema, type DbtSchedule } from "../dbt-schedule.js";
import { intervalScheduleSchema, type IntervalSchedule } from "../interval-schedule.js";
import { visualCronScheduleSchema, type VisualCronSchedule } from "../visual-cron-schedule.js";

export type Schedule1 = IntervalSchedule | CronSchedule | VisualCronSchedule | DbtSchedule;

export const schedule1Schema: Schema<Schedule1> = s.of<Schedule1>(
  s.union([
    s.lazy(() => intervalScheduleSchema),
    s.lazy(() => cronScheduleSchema),
    s.lazy(() => visualCronScheduleSchema),
    s.lazy(() => dbtScheduleSchema),
  ]),
);
