import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { healthCountType1Schema, type HealthCountType1 } from "./health-count-type1.js";
import { healthSchema, type Health } from "./health.js";
import { statusError1Schema, type StatusError1 } from "./status-error1.js";

/** Persistent queue status information (if persistent queue is enabled). */
export type AggregatedPqStatus2 = {
  /** Error information for the persistent queue, if applicable. */
  error?: StatusError1;
  /** Health status of the persistent queue. */
  health: Health;
  /**
   * Counts of persistent queue health statuses for the Source or Destination across all Worker
   * Processes. Includes only statuses with non-zero counts.<br/> <br><code>Green</code> == Healthy:
   * Normal operation<br/> <br><code>Yellow</code> == Degraded: Potential issues<br/>
   * <br><code>Red</code> == Critical: Problem or error that affects operation<br/>
   * <br><code>Unknown</code> == Unknown: Cannot determine health status.
   */
  healthCounts: HealthCountType1;
  /** Timestamp (in Unix time) when the persistent queue status was last updated. */
  timestamp: number;
};

export const aggregatedPqStatus2Schema: Schema<AggregatedPqStatus2> = s.object<AggregatedPqStatus2>({
  error: s.optional(s.lazy(() => statusError1Schema)),
  health: healthSchema,
  healthCounts: healthCountType1Schema,
  timestamp: s.int(),
});
