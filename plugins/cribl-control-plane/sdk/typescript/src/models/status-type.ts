import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { healthOptionsStatusSchema, type HealthOptionsStatus } from "./health-options-status.js";
import { statusError3Schema, type StatusError3 } from "./status-error3.js";
import { workerPqStatus2Schema, type WorkerPqStatus2 } from "./worker-pq-status2.js";

/**
 * Runtime status: health, metrics, and optional persistent-queue info. Fields may be absent when
 * data is unavailable.
 */
export type StatusType = {
  /** Error information, if applicable. */
  error?: StatusError3;
  /** Overall health status of the Source or Destination. */
  health?: HealthOptionsStatus;
  /** Metrics data for the Source or Destination. */
  metrics?: Record<string, unknown>;
  /** Persistent queue status information (if persistent queue is enabled). */
  pq?: WorkerPqStatus2;
  /** Timestamp (in Unix time) when the status was last updated. */
  timestamp?: number;
  /** Set to prefer status from the LB process, not from the worker process. */
  useStatusFromLb?: boolean;
};

export const statusTypeSchema: Schema<StatusType> = s.object<StatusType>({
  error: s.optional(s.lazy(() => statusError3Schema)),
  health: s.optional(s.lazy(() => healthOptionsStatusSchema)),
  metrics: s.optional(s.record(s.string(), s.unknown())),
  pq: s.optional(s.lazy(() => workerPqStatus2Schema)),
  timestamp: s.optional(s.int()),
  useStatusFromLb: s.optional(s.boolean()),
  _keysMap: {
    useStatusFromLb: "useStatusFromLB",
  },
});
