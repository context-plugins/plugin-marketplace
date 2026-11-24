import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When changes take effect. 'now' starts a new cycle immediately; 'cycle_end' defers to end of
 * current cycle.
 */
export const ScheduleChangeAt = {
  Now: "now",
  CycleEnd: "cycle_end",
} as const;
export type ScheduleChangeAt = (typeof ScheduleChangeAt)[keyof typeof ScheduleChangeAt] | (string & {});

export const scheduleChangeAtSchema: EnumSchema<ScheduleChangeAt> =
  s.enumOf<ScheduleChangeAt>(ScheduleChangeAt);
