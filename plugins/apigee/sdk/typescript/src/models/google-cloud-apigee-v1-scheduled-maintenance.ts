import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Scheduled maintenance information for an instance. */
export type GoogleCloudApigeeV1ScheduledMaintenance = {
  /** Output only. The start time (UTC) of the scheduled maintenance. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScheduledMaintenanceSchema: Schema<GoogleCloudApigeeV1ScheduledMaintenance> =
  s.object<GoogleCloudApigeeV1ScheduledMaintenance>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
