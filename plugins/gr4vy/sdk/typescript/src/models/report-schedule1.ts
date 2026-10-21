import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schedule for the report. */
export const ReportSchedule1 = {
  Daily: "daily",
  Monthly: "monthly",
  Once: "once",
  Weekly: "weekly",
} as const;
export type ReportSchedule1 = (typeof ReportSchedule1)[keyof typeof ReportSchedule1] | (string & {});

export const reportSchedule1Schema: EnumSchema<ReportSchedule1> = s.enumOf<ReportSchedule1>(ReportSchedule1);
