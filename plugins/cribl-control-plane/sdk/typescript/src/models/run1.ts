import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logLevel18Schema, type LogLevel18 } from "./log-level18.js";

/** Run settings that control how and when the Executor job runs. */
export type Run1 = {
  /** Reschedule tasks that failed with non-fatal errors */
  rescheduleDroppedTasks?: boolean;
  /** Maximum number of times a task can be rescheduled */
  maxTaskReschedule?: number;
  /** Level at which to set task logging */
  logLevel?: LogLevel18;
  /**
   * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified
   * (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
};

export const run1Schema: Schema<Run1> = s.object<Run1>({
  rescheduleDroppedTasks: s.optional(s.boolean()),
  maxTaskReschedule: s.optional(s.float64()),
  logLevel: s.optional(s.lazy(() => logLevel18Schema)),
  jobTimeout: s.optional(s.string()),
});
