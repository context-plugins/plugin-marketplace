import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowSchema,
  type GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow,
} from "./google-cloud-apigee-v1-maintenance-update-policy-maintenance-window.js";
import { maintenanceChannelSchema, type MaintenanceChannel } from "./maintenance-channel.js";

/**
 * Optional. Apigee customers can set the preferred window to perform maintenance on the instance
 * (day of the week and time of day).
 */
export type GoogleCloudApigeeV1MaintenanceUpdatePolicy2 = {
  /** Optional. Maintenance channel to specify relative scheduling for maintenance. */
  maintenanceChannel?: MaintenanceChannel;
  /** Optional. Preferred windows to perform maintenance. Currently limited to 1. */
  maintenanceWindows?: GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MaintenanceUpdatePolicy2Schema: Schema<GoogleCloudApigeeV1MaintenanceUpdatePolicy2> =
  s.object<GoogleCloudApigeeV1MaintenanceUpdatePolicy2>(
    {
      maintenanceChannel: s.optional(s.lazy(() => maintenanceChannelSchema)),
      maintenanceWindows: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
