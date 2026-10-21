import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { run2Schema, type Run2 } from "./run2.js";

/** Configuration for a scheduled job */
export type Schedule3 = {
  /** Enable to configure scheduling for this Collector */
  enabled?: boolean;
  /**
   * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency
   * limits
   */
  skippable?: boolean;
  /**
   * If Stream Leader (or single instance) restarts, run all missed jobs according to their original
   * schedules
   */
  resumeMissed?: boolean;
  /** A cron schedule on which to run this job */
  cronSchedule?: string;
  /** The maximum number of instances of this scheduled job that may be running at any time */
  maxConcurrentRuns?: number;
  run?: Run2;
};

export const schedule3Schema: Schema<Schedule3> = s.object<Schedule3>({
  enabled: s.optional(s.boolean()),
  skippable: s.optional(s.boolean()),
  resumeMissed: s.optional(s.boolean()),
  cronSchedule: s.optional(s.string()),
  maxConcurrentRuns: s.optional(s.float64()),
  run: s.optional(s.lazy(() => run2Schema)),
});
