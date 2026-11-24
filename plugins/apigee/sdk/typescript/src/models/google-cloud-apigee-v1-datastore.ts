import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DatastoreConfig2Schema,
  type GoogleCloudApigeeV1DatastoreConfig2,
} from "./google-cloud-apigee-v1-datastore-config2.js";

/**
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery),
 * including the credentials used to access the data repository.
 */
export type GoogleCloudApigeeV1Datastore = {
  /** Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z */
  createTime?: string;
  /** Output only. Organization that the datastore belongs to */
  org?: string;
  /** Datastore Configurations. */
  datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig2;
  /** Destination storage type. Supported types `gcs` or `bigquery`. */
  targetType?: string;
  /** Required. Display name in UI */
  displayName?: string;
  /**
   * Output only. Datastore last update time, in milliseconds since the epoch of
   * 1970-01-01T00:00:00Z
   */
  lastUpdateTime?: string;
  /**
   * Output only. Resource link of Datastore. Example:
   * `/organizations/{org}/analytics/datastores/{uuid}`
   */
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DatastoreSchema: Schema<GoogleCloudApigeeV1Datastore> =
  s.object<GoogleCloudApigeeV1Datastore>(
    {
      createTime: s.optional(s.string()),
      org: s.optional(s.string()),
      datastoreConfig: s.optional(s.lazy(() => googleCloudApigeeV1DatastoreConfig2Schema)),
      targetType: s.optional(s.string()),
      displayName: s.optional(s.string()),
      lastUpdateTime: s.optional(s.string()),
      self: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
