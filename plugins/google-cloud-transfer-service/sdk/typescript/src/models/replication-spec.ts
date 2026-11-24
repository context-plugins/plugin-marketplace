import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsData3Schema, type GcsData3 } from "./gcs-data3.js";
import { gcsData4Schema, type GcsData4 } from "./gcs-data4.js";
import { objectConditions1Schema, type ObjectConditions1 } from "./object-conditions1.js";
import { transferOptions1Schema, type TransferOptions1 } from "./transfer-options1.js";

/**
 * Specifies the configuration for a cross-bucket replication job. Cross-bucket replication copies
 * new or updated objects from a source Cloud Storage bucket to a destination Cloud Storage bucket.
 * Existing objects in the source bucket are not copied by a new cross-bucket replication job.
 */
export type ReplicationSpec = {
  /**
   * Object conditions that determine which objects are transferred. For replication jobs, only
   * `include_prefixes` and `exclude_prefixes` are supported.
   */
  objectConditions?: ObjectConditions1;
  /** The Cloud Storage bucket to which to replicate objects. */
  gcsDataSink?: GcsData3;
  /**
   * Specifies the metadata options to be applied during replication. Delete options are not
   * supported. If a delete option is specified, the request fails with an INVALID_ARGUMENT error.
   */
  transferOptions?: TransferOptions1;
  /** The Cloud Storage bucket from which to replicate objects. */
  gcsDataSource?: GcsData4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replicationSpecSchema: Schema<ReplicationSpec> = s.object<ReplicationSpec>(
  {
    objectConditions: s.optional(s.lazy(() => objectConditions1Schema)),
    gcsDataSink: s.optional(s.lazy(() => gcsData3Schema)),
    transferOptions: s.optional(s.lazy(() => transferOptions1Schema)),
    gcsDataSource: s.optional(s.lazy(() => gcsData4Schema)),
  },
  { additionalProperties: s.json() },
);
