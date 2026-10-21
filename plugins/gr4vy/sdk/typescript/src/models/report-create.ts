import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSchedule1Schema, type ReportSchedule1 } from "./report-schedule1.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { specSchema, type Spec } from "./unions/spec.js";

export type ReportCreate = {
  /** The name of the report. */
  name: string;
  /** A description of the report. */
  description?: Description2;
  /** The schedule for the report. */
  schedule: ReportSchedule1;
  /** Whether the report schedule is enabled. */
  scheduleEnabled: boolean;
  /** The timezone for the report schedule. @default "Etc/UTC" */
  scheduleTimezone?: string;
  /** The report specification. */
  spec: Spec;
};

export const reportCreateSchema: Schema<ReportCreate> = s.object<ReportCreate>({
  name: s.string(),
  description: s.optional(s.lazy(() => description2Schema)),
  schedule: reportSchedule1Schema,
  scheduleEnabled: s.boolean(),
  scheduleTimezone: s.defaulted(s.string(), "Etc/UTC"),
  spec: specSchema,
  _keysMap: {
    scheduleEnabled: "schedule_enabled",
    scheduleTimezone: "schedule_timezone",
  },
});
