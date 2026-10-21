import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Projects */
export type Projects = {
  /** Enabled */
  enabled?: boolean;
  /** Schedule on which to run this collection job */
  cronSchedule?: string;
  /** Earliest time for data collection, relative to now */
  earliest?: string;
  /** Latest time for data collection, relative to now */
  latest?: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
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
};

export const projectsSchema: Schema<Projects> = s.object<Projects>({
  enabled: s.optional(s.boolean()),
  cronSchedule: s.optional(s.string()),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
  jobTimeout: s.optional(s.string()),
  stateTracking: s.optional(s.boolean()),
  stateUpdateExpression: s.optional(s.string()),
  stateMergeExpression: s.optional(s.string()),
  manageState: s.optional(s.record(s.string(), s.unknown())),
});
