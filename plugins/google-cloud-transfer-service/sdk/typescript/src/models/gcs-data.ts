import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * In a GcsData resource, an object's name is the Cloud Storage object's name and its "last
 * modification time" refers to the object's `updated` property of Cloud Storage objects, which
 * changes when the content or the metadata of the object is updated.
 */
export type GcsData = {
  /**
   * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'.
   * This field is treated as an object prefix. As such, it should generally not begin with a '/'.
   * The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames).
   */
  path?: string;
  /**
   * Preview. Enables the transfer of managed folders between Cloud Storage buckets. Set this option
   * on the gcs_data_source. If set to true: - Managed folders in the source bucket are transferred
   * to the destination bucket. - Managed folders in the destination bucket are overwritten. Other
   * OVERWRITE options are not supported. See [Transfer Cloud Storage managed
   * folders](/storage-transfer/docs/managed-folders).
   */
  managedFolderTransferEnabled?: boolean;
  /**
   * Required. Cloud Storage bucket name. Must meet [Bucket Name
   * Requirements](/storage/docs/naming#requirements).
   */
  bucketName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsDataSchema: Schema<GcsData> = s.object<GcsData>(
  {
    path: s.optional(s.string()),
    managedFolderTransferEnabled: s.optional(s.boolean()),
    bucketName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
