import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapRunExecutionCounts = {
  /**
   * The total number of child workflow executions that were started by a Map Run, but haven't
   * started executing yet.
   */
  pending: number;
  /**
   * The total number of child workflow executions that were started by a Map Run and are currently
   * in-progress.
   */
  running: number;
  /**
   * The total number of child workflow executions that were started by a Map Run and have completed
   * successfully.
   */
  succeeded: number;
  /**
   * The total number of child workflow executions that were started by a Map Run, but have failed.
   */
  failed: number;
  /**
   * The total number of child workflow executions that were started by a Map Run and have timed
   * out.
   */
  timedOut: number;
  /**
   * The total number of child workflow executions that were started by a Map Run and were running,
   * but were either stopped by the user or by Step Functions because the Map Run failed.
   */
  aborted: number;
  /** The total number of child workflow executions that were started by a Map Run. */
  total: number;
  /**
   * Returns the count of child workflow executions whose results were written by ResultWriter. For
   * more information, see ResultWriter in the Step Functions Developer Guide.
   */
  resultsWritten: number;
  /**
   * The number of FAILED, ABORTED, or TIMED_OUT child workflow executions that cannot be redriven
   * because their execution status is terminal. For example, child workflows with an execution
   * status of FAILED, ABORTED, or TIMED_OUT and a redriveStatus of NOT_REDRIVABLE.
   */
  failuresNotRedrivable?: number;
  /**
   * The number of unsuccessful child workflow executions currently waiting to be redriven. The
   * status of these child workflow executions could be FAILED, ABORTED, or TIMED_OUT in the
   * original execution attempt or a previous redrive attempt.
   */
  pendingRedrive?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapRunExecutionCountsSchema: Schema<MapRunExecutionCounts> = s.object<MapRunExecutionCounts>(
  {
    pending: s.int(),
    running: s.int(),
    succeeded: s.int(),
    failed: s.int(),
    timedOut: s.int(),
    aborted: s.int(),
    total: s.int(),
    resultsWritten: s.int(),
    failuresNotRedrivable: s.optional(s.int()),
    pendingRedrive: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
