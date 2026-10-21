import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusError1Schema, type StatusError1 } from "./status-error1.js";

export type WorkerPqStatus = {
  /** Error information for the persistent queue, if applicable. */
  error?: StatusError1;
  /**
   * Persistent queue health status for the Worker Process, as a numeric code.<br/>
   * <br><code>0</code> == Healthy (green; normal operation)<br/> <br><code>1</code> == Degraded
   * (yellow; potential issues)<br/> <br><code>2</code> == Critical (red; problem or error that
   * affects operation).
   */
  health: number;
  /** Persistent-queue metrics reported for the Worker Process. */
  metrics: Record<string, unknown>;
  /**
   * Timestamp (in Unix time) when the persistent queue status was last reported for the Worker
   * Process, in milliseconds.
   */
  timestamp: number;
};

export const workerPqStatusSchema: Schema<WorkerPqStatus> = s.object<WorkerPqStatus>({
  error: s.optional(s.lazy(() => statusError1Schema)),
  health: s.int(),
  metrics: s.record(s.string(), s.unknown()),
  timestamp: s.int(),
});
