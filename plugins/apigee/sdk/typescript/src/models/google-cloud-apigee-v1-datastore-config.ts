import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration detail for datastore */
export type GoogleCloudApigeeV1DatastoreConfig = {
  /** Required. Google Cloud project in which the datastore exists */
  projectId?: string;
  /** Path of Cloud Storage bucket Required for `gcs` target_type. */
  path?: string;
  /** Name of the Cloud Storage bucket. Required for `gcs` target_type. */
  bucketName?: string;
  /** BigQuery dataset name Required for `bigquery` target_type. */
  datasetName?: string;
  /** Prefix of BigQuery table Required for `bigquery` target_type. */
  tablePrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DatastoreConfigSchema: Schema<GoogleCloudApigeeV1DatastoreConfig> =
  s.object<GoogleCloudApigeeV1DatastoreConfig>(
    {
      projectId: s.optional(s.string()),
      path: s.optional(s.string()),
      bucketName: s.optional(s.string()),
      datasetName: s.optional(s.string()),
      tablePrefix: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
