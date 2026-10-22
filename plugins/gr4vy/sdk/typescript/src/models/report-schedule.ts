import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportSchedule = {
  Daily: "daily",
  Monthly: "monthly",
  Once: "once",
  Weekly: "weekly",
} as const;
export type ReportSchedule = (typeof ReportSchedule)[keyof typeof ReportSchedule] | (string & {});

export const reportScheduleSchema: EnumSchema<ReportSchedule> = s.enumOf<ReportSchedule>(ReportSchedule);
