import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logLevel17Schema, type LogLevel17 } from "./log-level17.js";

export type ContentType2 = {
  /** The name of the Wiz query */
  contentType: string;
  /** Description */
  contentDescription?: string;
  /** Enable content */
  enabled?: boolean;
  /** Track collection progress between consecutive scheduled executions */
  stateTracking?: boolean;
  /**
   * JavaScript expression that defines how to update the state from an event. Use the event's data
   * and the current state to compute the new state. See [Understanding State Expression
   * Fields](https://docs.cribl.io/stream/collectors-rest#state-tracking-expression-fields) for more
   * information.
   */
  stateUpdateExpression?: string;
  /**
   * JavaScript expression that defines which state to keep when merging a task's newly reported
   * state with previously saved state. Evaluates `prevState` and `newState` variables, resolving to
   * the state to keep.
   */
  stateMergeExpression?: string;
  /** Controls for viewing and managing the collector state. */
  manageState?: Record<string, unknown>;
  /**
   * Template for POST body to send with the Collect request. Reference global variables, or
   * functions using template params: `${C.vars.myVar}`, or `${Date.now()}`, `${param}`.
   */
  contentQuery: string;
  /** A cron schedule on which to run this job */
  cronSchedule: string;
  /**
   * Earliest time, relative to now. Format supported:
   * [+|-]<time_integer><time_unit>@<snap-to_time_unit> (ex: -1hr, -42m, -42m@h)
   */
  earliest: string;
  /**
   * Latest time, relative to now. Format supported:
   * [+|-]<time_integer><time_unit>@<snap-to_time_unit> (ex: -1hr, -42m, -42m@h)
   */
  latest: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Units default to seconds if
   * not specified. Enter 0 for unlimited time.
   */
  jobTimeout?: string;
  /** Collector runtime log level */
  logLevel?: LogLevel17;
  /**
   * Maximum number of pages to retrieve per collection task. Defaults to 0. Set to 0 to retrieve
   * all pages.
   */
  maxPages?: number;
};

export const contentType2Schema: Schema<ContentType2> = s.object<ContentType2>({
  contentType: s.string(),
  contentDescription: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  stateTracking: s.optional(s.boolean()),
  stateUpdateExpression: s.optional(s.string()),
  stateMergeExpression: s.optional(s.string()),
  manageState: s.optional(s.record(s.string(), s.unknown())),
  contentQuery: s.string(),
  cronSchedule: s.string(),
  earliest: s.string(),
  latest: s.string(),
  jobTimeout: s.optional(s.string()),
  logLevel: s.optional(s.lazy(() => logLevel17Schema)),
  maxPages: s.optional(s.float64()),
});
