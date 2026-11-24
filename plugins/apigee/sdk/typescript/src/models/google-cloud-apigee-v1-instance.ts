import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AccessLoggingConfig2Schema,
  type GoogleCloudApigeeV1AccessLoggingConfig2,
} from "./google-cloud-apigee-v1-access-logging-config2.js";
import {
  googleCloudApigeeV1MaintenanceUpdatePolicy2Schema,
  type GoogleCloudApigeeV1MaintenanceUpdatePolicy2,
} from "./google-cloud-apigee-v1-maintenance-update-policy2.js";
import {
  googleCloudApigeeV1ScheduledMaintenance2Schema,
  type GoogleCloudApigeeV1ScheduledMaintenance2,
} from "./google-cloud-apigee-v1-scheduled-maintenance2.js";
import { peeringCidrRangeSchema, type PeeringCidrRange } from "./peering-cidr-range.js";
import { state4Schema, type State4 } from "./state4.js";

/** Apigee runtime instance. */
export type GoogleCloudApigeeV1Instance = {
  /**
   * Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready
   * to use.
   */
  state?: State4;
  /** Required. Compute Engine location where the instance resides. */
  location?: string;
  /** Output only. Port number of the exposed Apigee endpoint. */
  port?: string;
  /** Optional. Description of the instance. */
  description?: string;
  /**
   * Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee
   * instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or
   * neither). Ranges you provide should be freely available as part of a larger named range you
   * have allocated to the Service Networking peering. If this parameter is not provided, Apigee
   * automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22
   * CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats:
   * `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`
   */
  ipRange?: string;
  /** Output only. Time the instance was last modified in milliseconds since epoch. */
  lastModifiedAt?: string;
  /**
   * Output only. Indicates whether the instance is version locked. If true, the instance will not
   * be updated by automated runtime rollouts. This is only supported for Apigee X instances.
   */
  isVersionLocked?: boolean;
  /**
   * Output only. Resource name of the service attachment created for the instance in the format:
   * `projects/*&#47;regions/*&#47;serviceAttachments/*` Apigee customers can privately forward
   * traffic to this service attachment using the PSC endpoints.
   */
  serviceAttachment?: string;
  /**
   * Optional. Customer accept list represents the list of projects (id/number) on customer side
   * that can privately connect to the service attachment. It is an optional field which the
   * customers can provide during the instance creation. By default, the customer project associated
   * with the Apigee organization will be included to the list.
   */
  consumerAcceptList?: string[];
  /**
   * Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect
   * to the service.
   */
  host?: string;
  /**
   * Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not
   * specified, a Google-Managed encryption key will be used. Use the following format:
   * `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
   */
  diskEncryptionKeyName?: string;
  /**
   * Required. Resource ID of the instance. Values must match the regular expression
   * `^a-z{0,30}[a-z\d]$`.
   */
  name?: string;
  /**
   * Optional. Access logging configuration enables the access logging feature at the instance.
   * Apigee customers can enable access logging to ship the access logs to their own project's cloud
   * logging.
   */
  accessLoggingConfig?: GoogleCloudApigeeV1AccessLoggingConfig2;
  /**
   * Output only. Time and date of the scheduled maintenance for this instance. This field is only
   * populated for instances that have opted into Maintenance Window and if there is an upcoming
   * maintenance. Cleared once the maintenance is complete.
   */
  scheduledMaintenance?: GoogleCloudApigeeV1ScheduledMaintenance2;
  /** Optional. Display name for the instance. */
  displayName?: string;
  /** Output only. Time the instance was created in milliseconds since epoch. */
  createdAt?: string;
  /**
   * Optional. Size of the CIDR block range that will be reserved by the instance. PAID
   * organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation
   * organizations support only `SLASH_23`.
   *
   * @deprecated
   */
  peeringCidrRange?: PeeringCidrRange;
  /**
   * Optional. Apigee customers can set the preferred window to perform maintenance on the instance
   * (day of the week and time of day).
   */
  maintenanceUpdatePolicy?: GoogleCloudApigeeV1MaintenanceUpdatePolicy2;
  /**
   * Output only. Version of the runtime system running in the instance. The runtime system is the
   * set of components that serve the API Proxy traffic in your Environments.
   */
  runtimeVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1InstanceSchema: Schema<GoogleCloudApigeeV1Instance> =
  s.object<GoogleCloudApigeeV1Instance>(
    {
      state: s.optional(s.lazy(() => state4Schema)),
      location: s.optional(s.string()),
      port: s.optional(s.string()),
      description: s.optional(s.string()),
      ipRange: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      isVersionLocked: s.optional(s.boolean()),
      serviceAttachment: s.optional(s.string()),
      consumerAcceptList: s.optional(s.array(s.string())),
      host: s.optional(s.string()),
      diskEncryptionKeyName: s.optional(s.string()),
      name: s.optional(s.string()),
      accessLoggingConfig: s.optional(s.lazy(() => googleCloudApigeeV1AccessLoggingConfig2Schema)),
      scheduledMaintenance: s.optional(s.lazy(() => googleCloudApigeeV1ScheduledMaintenance2Schema)),
      displayName: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      peeringCidrRange: s.optional(s.lazy(() => peeringCidrRangeSchema)),
      maintenanceUpdatePolicy: s.optional(s.lazy(() => googleCloudApigeeV1MaintenanceUpdatePolicy2Schema)),
      runtimeVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
