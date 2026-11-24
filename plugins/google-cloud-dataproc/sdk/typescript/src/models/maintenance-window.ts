import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";

/**
 * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance
 * operation to the service.
 */
export type MaintenanceWindow = {
  /** Optional. The hour of day (0-23) when the window starts. */
  hourOfDay?: number;
  /** Optional. The day of week, when the window starts. */
  dayOfWeek?: DayOfWeek;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const maintenanceWindowSchema: Schema<MaintenanceWindow> = s.object<MaintenanceWindow>(
  {
    hourOfDay: s.optional(s.int()),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
  },
  { additionalProperties: s.json() },
);
