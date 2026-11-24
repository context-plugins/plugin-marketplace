import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Cloud Storage bucket to which to replicate objects. */
export type GcsData3 = {
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

export const gcsData3Schema: Schema<GcsData3> = s.object<GcsData3>(
  {
    path: s.optional(s.string()),
    managedFolderTransferEnabled: s.optional(s.boolean()),
    bucketName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
