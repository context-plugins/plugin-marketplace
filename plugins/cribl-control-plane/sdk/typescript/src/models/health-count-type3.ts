import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Counts of health statuses for the Source or Destination across all Worker Processes. Includes
 * only statuses with non-zero counts.<br/> <br><code>Green</code> == Healthy: Normal operation<br/>
 * <br><code>Yellow</code> == Degraded: Potential issues<br/> <br><code>Red</code> == Critical:
 * Problem or error that affects operation<br/> <br><code>Unknown</code> == Unknown: Cannot
 * determine health status.
 */
export type HealthCountType3 = {
  /** Number of Worker Processes reporting a healthy (Green) status. */
  green?: number;
  /** Number of Worker Processes reporting a critical (Red) status. */
  red?: number;
  /** Number of Worker Processes reporting an unknown health status. */
  unknown?: number;
  /** Number of Worker Processes reporting a degraded (Yellow) status. */
  yellow?: number;
};

export const healthCountType3Schema: Schema<HealthCountType3> = s.object<HealthCountType3>({
  green: s.optional(s.int()),
  red: s.optional(s.int()),
  unknown: s.optional(s.int()),
  yellow: s.optional(s.int()),
  _keysMap: {
    green: "Green",
    red: "Red",
    unknown: "Unknown",
    yellow: "Yellow",
  },
});
