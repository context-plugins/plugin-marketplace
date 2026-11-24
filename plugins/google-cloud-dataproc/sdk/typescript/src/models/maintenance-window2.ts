import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";

/**
 * Optional. The one hour maintenance window of the metastore service. This specifies when the
 * service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed
 * for services with the SPANNER database type.
 */
export type MaintenanceWindow2 = {
  /** Optional. The hour of day (0-23) when the window starts. */
  hourOfDay?: number;
  /** Optional. The day of week, when the window starts. */
  dayOfWeek?: DayOfWeek;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const maintenanceWindow2Schema: Schema<MaintenanceWindow2> = s.object<MaintenanceWindow2>(
  {
    hourOfDay: s.optional(s.int()),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
  },
  { additionalProperties: s.json() },
);
