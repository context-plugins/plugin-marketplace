import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the report schedule is enabled. */
export type ScheduleEnabled = boolean;

export const scheduleEnabledSchema: Schema<ScheduleEnabled> = s.of<ScheduleEnabled>(s.union([s.boolean()]));
