import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logLevel18Schema, type LogLevel18 } from "./log-level18.js";
import { earliestSchema, type Earliest } from "./unions/earliest.js";
import { latestSchema, type Latest } from "./unions/latest.js";

/** Run settings that control how and when the Collection job runs. */
export type RunnableJobCollectionScheduleRunType = {
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
  /**
   * Job run mode. Preview will either return up to N matching results, or will run until capture
   * time T is reached. Discovery will gather the list of files to turn into streaming tasks,
   * without running the data collection job. Full Run will run the collection job.
   */
  mode: string;
  /** Time range */
  timeRangeType?: string;
  /** Earliest time to collect data for the selected timezone */
  earliest?: Earliest;
  /** Latest time to collect data for the selected timezone */
  latest?: Latest;
  /** IANA timezone name for interpreting timestamp values in the collection time range. */
  timestampTimezone?: string;
  /** A filter for tokens in the provided collect path and/or the events being collected */
  expression?: string;
  /**
   * Limits the bundle size for small tasks. For example,
   *
   * if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task.
   */
  minTaskSize?: string;
  /**
   * Limits the bundle size for files above the lower task bundle size. For example, if your upper
   * bundle size is 10MB,
   *
   * you can bundle up to five 2MB files into one task. Files greater than this size will be
   * assigned to individual tasks.
   */
  maxTaskSize?: string;
};

export const runnableJobCollectionScheduleRunTypeSchema: Schema<RunnableJobCollectionScheduleRunType> =
  s.object<RunnableJobCollectionScheduleRunType>({
    rescheduleDroppedTasks: s.optional(s.boolean()),
    maxTaskReschedule: s.optional(s.float64()),
    logLevel: s.optional(s.lazy(() => logLevel18Schema)),
    jobTimeout: s.optional(s.string()),
    mode: s.string(),
    timeRangeType: s.optional(s.string()),
    earliest: s.optional(s.lazy(() => earliestSchema)),
    latest: s.optional(s.lazy(() => latestSchema)),
    timestampTimezone: s.optional(s.string()),
    expression: s.optional(s.string()),
    minTaskSize: s.optional(s.string()),
    maxTaskSize: s.optional(s.string()),
  });
