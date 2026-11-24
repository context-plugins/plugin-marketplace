import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseTypeSchema, type DatabaseType } from "./database-type.js";
import { encryptionConfig22Schema, type EncryptionConfig22 } from "./encryption-config22.js";
import { hiveMetastoreConfig2Schema, type HiveMetastoreConfig2 } from "./hive-metastore-config2.js";
import { lakehouseProxyConfig2Schema, type LakehouseProxyConfig2 } from "./lakehouse-proxy-config2.js";
import { maintenanceWindow2Schema, type MaintenanceWindow2 } from "./maintenance-window2.js";
import { metadataIntegration1Schema, type MetadataIntegration1 } from "./metadata-integration1.js";
import {
  metadataManagementActivity2Schema,
  type MetadataManagementActivity2,
} from "./metadata-management-activity2.js";
import { networkConfig3Schema, type NetworkConfig3 } from "./network-config3.js";
import { releaseChannelSchema, type ReleaseChannel } from "./release-channel.js";
import { scalingConfig2Schema, type ScalingConfig2 } from "./scaling-config2.js";
import { scheduledBackup2Schema, type ScheduledBackup2 } from "./scheduled-backup2.js";
import { state11Schema, type State11 } from "./state11.js";
import { telemetryConfig2Schema, type TelemetryConfig2 } from "./telemetry-config2.js";
import { tierSchema, type Tier } from "./tier.js";

/** A managed metastore service that serves metadata queries. */
export type Service = {
  /** Optional. The TCP port at which the metastore service is reached. Default: 9083. */
  port?: number;
  /**
   * Optional. The one hour maintenance window of the metastore service. This specifies when the
   * service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed
   * for services with the SPANNER database type.
   */
  maintenanceWindow?: MaintenanceWindow2;
  /** Immutable. The database type that the Metastore service stores its data. */
  databaseType?: DatabaseType;
  /**
   * Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related
   * to the metastore service are stored.
   */
  artifactGcsUri?: string;
  /** Output only. The time when the metastore service was last updated. */
  updateTime?: string;
  /** Optional. The tier of the service. */
  tier?: Tier;
  /**
   * Optional. The setting that defines how metastore metadata should be integrated with external
   * services and systems.
   */
  metadataIntegration?: MetadataIntegration1;
  /**
   * Output only. Additional information about the current state of the metastore service, if
   * available.
   */
  stateMessage?: string;
  /**
   * Optional. The configuration specifying the network settings for the Dataproc Metastore service.
   */
  networkConfig?: NetworkConfig3;
  /** Output only. The URI of the endpoint used to access the metastore service. */
  endpointUri?: string;
  /** Immutable. The release channel of the service. If unspecified, defaults to STABLE. */
  releaseChannel?: ReleaseChannel;
  /**
   * Immutable. Information used to configure the Dataproc Metastore service to encrypt customer
   * data at rest. Cannot be updated.
   */
  encryptionConfig?: EncryptionConfig22;
  /** Optional. The configuration of scheduled backup for the metastore service. */
  scheduledBackup?: ScheduledBackup2;
  /** Output only. The time when the metastore service was created. */
  createTime?: string;
  /** Optional. Scaling configuration of the metastore service. */
  scalingConfig?: ScalingConfig2;
  /** Output only. The metadata management activities of the metastore service. */
  metadataManagementActivity?: MetadataManagementActivity2;
  /** Output only. The current state of the metastore service. */
  state?: State11;
  /**
   * Immutable. Identifier. The relative resource name of the metastore service, in the following
   * format:projects/{project_number}/locations/{location_id}/services/{service_id}.
   */
  name?: string;
  /**
   * Configuration information specific to running Hive metastore software as the metastore service.
   */
  hiveMetastoreConfig?: HiveMetastoreConfig2;
  /** User-defined labels for the metastore service. */
  labels?: Record<string, string>;
  /** Output only. The Lakehouse proxy routing configuration for the metastore service. */
  lakehouseProxyConfig?: LakehouseProxyConfig2;
  /**
   * Optional. The configuration specifying telemetry settings for the Dataproc Metastore service.
   * If unspecified defaults to JSON.
   */
  telemetryConfig?: TelemetryConfig2;
  /**
   * Optional. Indicates if the dataproc metastore should be protected against accidental deletions.
   */
  deletionProtection?: boolean;
  /**
   * Immutable. The relative resource name of the VPC network on which the instance can be accessed.
   * It is specified in the following form:projects/{project_number}/global/networks/{network_id}.
   */
  network?: string;
  /** Output only. The globally unique resource identifier of the metastore service. */
  uid?: string;
  /**
   * Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example:
   * "123/environment": "production", "123/costCenter": "marketing"
   */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceSchema: Schema<Service> = s.object<Service>(
  {
    port: s.optional(s.int()),
    maintenanceWindow: s.optional(s.lazy(() => maintenanceWindow2Schema)),
    databaseType: s.optional(s.lazy(() => databaseTypeSchema)),
    artifactGcsUri: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    tier: s.optional(s.lazy(() => tierSchema)),
    metadataIntegration: s.optional(s.lazy(() => metadataIntegration1Schema)),
    stateMessage: s.optional(s.string()),
    networkConfig: s.optional(s.lazy(() => networkConfig3Schema)),
    endpointUri: s.optional(s.string()),
    releaseChannel: s.optional(s.lazy(() => releaseChannelSchema)),
    encryptionConfig: s.optional(s.lazy(() => encryptionConfig22Schema)),
    scheduledBackup: s.optional(s.lazy(() => scheduledBackup2Schema)),
    createTime: s.optional(s.string()),
    scalingConfig: s.optional(s.lazy(() => scalingConfig2Schema)),
    metadataManagementActivity: s.optional(s.lazy(() => metadataManagementActivity2Schema)),
    state: s.optional(s.lazy(() => state11Schema)),
    name: s.optional(s.string()),
    hiveMetastoreConfig: s.optional(s.lazy(() => hiveMetastoreConfig2Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    lakehouseProxyConfig: s.optional(s.lazy(() => lakehouseProxyConfig2Schema)),
    telemetryConfig: s.optional(s.lazy(() => telemetryConfig2Schema)),
    deletionProtection: s.optional(s.boolean()),
    network: s.optional(s.string()),
    uid: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
