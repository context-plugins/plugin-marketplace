import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bucketWidthSchema, type BucketWidth } from "./bucket-width.js";
import { contentType5Schema, type ContentType5 } from "./content-type5.js";
import { groupBySchema, type GroupBy } from "./group-by.js";

export type ContentType4 = {
  /** Content type */
  contentType: ContentType5;
  /** Enabled */
  disabled?: boolean;
  /**
   * Track collection progress between runs. When enabled, each run resumes from where the last one
   * left off, preventing duplicate data. The API refreshes approximately every 4 hours; runs
   * between refreshes produce zero events until new finalized data becomes available. This is
   * expected behavior.
   */
  stateTracking?: boolean;
  /**
   * JavaScript expression evaluated per event to compute new state. The default tracks the
   * data_refreshed_at watermark reported by the API.
   */
  stateUpdateExpression?: string;
  /**
   * JavaScript expression to merge state across distributed Workers. The default keeps the most
   * recent watermark.
   */
  stateMergeExpression?: string;
  /** Manage state */
  manageState?: boolean;
  /**
   * Dimensions for breaking down usage. Leave empty to collect a single summed row per time bucket.
   */
  groupBy?: GroupBy[];
  /**
   * Time bucket size for aggregated results. Smaller buckets yield more events per collection run.
   */
  bucketWidth?: BucketWidth;
  /**
   * Cron schedule for collection runs. The API refreshes data approximately every 4 hours, so
   * polling more frequently will not yield new results.
   */
  cronSchedule: string;
  /**
   * Earliest time for data collection, relative to now. Used as the initial lower bound on first
   * run before any state exists. Maximum 365 days (API limit). Examples: -7d@d, -24h, -30d.
   */
  earliest?: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
};

export const contentType4Schema: Schema<ContentType4> = s.object<ContentType4>({
  contentType: contentType5Schema,
  disabled: s.optional(s.boolean()),
  stateTracking: s.optional(s.boolean()),
  stateUpdateExpression: s.optional(s.string()),
  stateMergeExpression: s.optional(s.string()),
  manageState: s.optional(s.boolean()),
  groupBy: s.optional(s.array(s.lazy(() => groupBySchema))),
  bucketWidth: s.optional(s.lazy(() => bucketWidthSchema)),
  cronSchedule: s.string(),
  earliest: s.optional(s.string()),
  jobTimeout: s.optional(s.string()),
});
