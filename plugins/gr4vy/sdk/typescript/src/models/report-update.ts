import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { name6Schema, type Name6 } from "./unions/name6.js";
import { scheduleEnabledSchema, type ScheduleEnabled } from "./unions/schedule-enabled.js";

export type ReportUpdate = {
  /** The name of the report. */
  name?: Name6;
  /** A description of the report. */
  description?: Description2;
  /** Whether the report schedule is enabled. */
  scheduleEnabled?: ScheduleEnabled;
};

export const reportUpdateSchema: Schema<ReportUpdate> = s.object<ReportUpdate>({
  name: s.optional(s.lazy(() => name6Schema)),
  description: s.optional(s.lazy(() => description2Schema)),
  scheduleEnabled: s.optional(s.lazy(() => scheduleEnabledSchema)),
  _keysMap: {
    scheduleEnabled: "schedule_enabled",
  },
});
