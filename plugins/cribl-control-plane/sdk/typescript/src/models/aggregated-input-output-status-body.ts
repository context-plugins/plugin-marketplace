import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregatedPqStatus2Schema, type AggregatedPqStatus2 } from "./aggregated-pq-status2.js";
import { healthCountType3Schema, type HealthCountType3 } from "./health-count-type3.js";
import { healthOptionsStatusSchema, type HealthOptionsStatus } from "./health-options-status.js";
import { statusError3Schema, type StatusError3 } from "./status-error3.js";

export type AggregatedInputOutputStatusBody = {
  /** Error information, if applicable. */
  error?: StatusError3;
  /** Overall health status of the Source or Destination. */
  health: HealthOptionsStatus;
  /**
   * Counts of health statuses for the Source or Destination across all Worker Processes. Includes
   * only statuses with non-zero counts.<br/> <br><code>Green</code> == Healthy: Normal
   * operation<br/> <br><code>Yellow</code> == Degraded: Potential issues<br/> <br><code>Red</code>
   * == Critical: Problem or error that affects operation<br/> <br><code>Unknown</code> == Unknown:
   * Cannot determine health status.
   */
  healthCounts: HealthCountType3;
  /**
   * Metrics data for the Source or Destination, including base metrics, aggregated across all
   * Worker Processes. For load-balanced Destinations, includes item-level metrics.
   */
  metrics?: Record<string, unknown>;
  /** Persistent queue status information (if persistent queue is enabled). */
  pq?: AggregatedPqStatus2;
  /** Timestamp (in Unix time) when the status was last updated. */
  timestamp: number;
};

export const aggregatedInputOutputStatusBodySchema: Schema<AggregatedInputOutputStatusBody> =
  s.object<AggregatedInputOutputStatusBody>({
    error: s.optional(s.lazy(() => statusError3Schema)),
    health: healthOptionsStatusSchema,
    healthCounts: healthCountType3Schema,
    metrics: s.optional(s.record(s.string(), s.unknown())),
    pq: s.optional(s.lazy(() => aggregatedPqStatus2Schema)),
    timestamp: s.int(),
  });
