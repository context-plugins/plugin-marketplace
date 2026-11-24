import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The dataset template to use for dynamic dataset creation. */
export type DatasetTemplate2 = {
  /**
   * Required. The geographic location where the dataset should reside. See
   * https://cloud.google.com/bigquery/docs/locations for supported locations.
   */
  location?: string;
  /**
   * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
   * The BigQuery Service Account associated with your project requires access to this encryption
   * key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
   * See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
   */
  kmsKeyName?: string;
  /**
   * If supplied, every created dataset will have its name prefixed by the provided value. The
   * prefix and name will be separated by an underscore. i.e. _.
   */
  datasetIdPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetTemplate2Schema: Schema<DatasetTemplate2> = s.object<DatasetTemplate2>(
  {
    location: s.optional(s.string()),
    kmsKeyName: s.optional(s.string()),
    datasetIdPrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
