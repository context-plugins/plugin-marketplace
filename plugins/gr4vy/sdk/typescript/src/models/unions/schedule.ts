import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportScheduleSchema, type ReportSchedule } from "../report-schedule.js";

/** Filters the reports by the type of schedule at which they run. */
export type Schedule = ReportSchedule[];

export const scheduleSchema: Schema<Schedule> = s.of<Schedule>(
  s.union([s.array(s.lazy(() => reportScheduleSchema))]),
);
