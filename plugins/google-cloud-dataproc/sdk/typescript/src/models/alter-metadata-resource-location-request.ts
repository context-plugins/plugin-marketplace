import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for DataprocMetastore.AlterMetadataResourceLocation. */
export type AlterMetadataResourceLocationRequest = {
  /**
   * Required. The relative metadata resource name in the following format.databases/{database_id}
   * or databases/{database_id}/tables/{table_id} or
   * databases/{database_id}/tables/{table_id}/partitions/{partition_id}
   */
  resourceName?: string;
  /** Required. The new location URI for the metadata resource. */
  locationUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alterMetadataResourceLocationRequestSchema: Schema<AlterMetadataResourceLocationRequest> =
  s.object<AlterMetadataResourceLocationRequest>(
    {
      resourceName: s.optional(s.string()),
      locationUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
