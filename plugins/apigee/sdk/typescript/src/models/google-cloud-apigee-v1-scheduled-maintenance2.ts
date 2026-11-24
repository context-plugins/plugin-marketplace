import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Output only. Time and date of the scheduled maintenance for this instance. This field is only
 * populated for instances that have opted into Maintenance Window and if there is an upcoming
 * maintenance. Cleared once the maintenance is complete.
 */
export type GoogleCloudApigeeV1ScheduledMaintenance2 = {
  /** Output only. The start time (UTC) of the scheduled maintenance. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScheduledMaintenance2Schema: Schema<GoogleCloudApigeeV1ScheduledMaintenance2> =
  s.object<GoogleCloudApigeeV1ScheduledMaintenance2>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
