import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HealthCountType = {
  /** Number of Worker Processes reporting a healthy (Green) status. */
  green?: number;
  /** Number of Worker Processes reporting a critical (Red) status. */
  red?: number;
  /** Number of Worker Processes reporting an unknown health status. */
  unknown?: number;
  /** Number of Worker Processes reporting a degraded (Yellow) status. */
  yellow?: number;
};

export const healthCountTypeSchema: Schema<HealthCountType> = s.object<HealthCountType>({
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
