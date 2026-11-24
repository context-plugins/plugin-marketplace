import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for
 * transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same
 * as KMS_KEY_DESTINATION_BUCKET_DEFAULT.
 */
export const KmsKey = {
  KmsKeyUnspecified: "KMS_KEY_UNSPECIFIED",
  KmsKeyDestinationBucketDefault: "KMS_KEY_DESTINATION_BUCKET_DEFAULT",
  KmsKeyPreserve: "KMS_KEY_PRESERVE",
} as const;
export type KmsKey = (typeof KmsKey)[keyof typeof KmsKey] | (string & {});

export const kmsKeySchema: EnumSchema<KmsKey> = s.enumOf<KmsKey>(KmsKey);
