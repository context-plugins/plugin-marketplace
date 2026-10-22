import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the reports by wether their schedule is enabled. */
export type ScheduleEnabled1 = boolean;

export const scheduleEnabled1Schema: Schema<ScheduleEnabled1> = s.of<ScheduleEnabled1>(
  s.union([s.boolean()]),
);
