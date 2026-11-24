import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { daySchema, type Day } from "./day.js";
import { googleTypeTimeOfDay2Schema, type GoogleTypeTimeOfDay2 } from "./google-type-time-of-day2.js";

/**
 * MaintenanceWindow specifies the preferred day of the week and time of day to perform maintenance.
 */
export type GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow = {
  /** Required. The start time (UTC) of the maintenance window. */
  startTime?: GoogleTypeTimeOfDay2;
  /** Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. */
  day?: Day;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowSchema: Schema<GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow> =
  s.object<GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow>(
    {
      startTime: s.optional(s.lazy(() => googleTypeTimeOfDay2Schema)),
      day: s.optional(s.lazy(() => daySchema)),
    },
    { additionalProperties: s.json() },
  );
