import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Datastore Configurations. */
export type GoogleCloudApigeeV1DatastoreConfig2 = {
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

export const googleCloudApigeeV1DatastoreConfig2Schema: Schema<GoogleCloudApigeeV1DatastoreConfig2> =
  s.object<GoogleCloudApigeeV1DatastoreConfig2>(
    {
      projectId: s.optional(s.string()),
      path: s.optional(s.string()),
      bucketName: s.optional(s.string()),
      datasetName: s.optional(s.string()),
      tablePrefix: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
