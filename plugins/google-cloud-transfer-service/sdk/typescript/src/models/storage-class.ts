import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.
 * If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.
 */
export const StorageClass = {
  StorageClassUnspecified: "STORAGE_CLASS_UNSPECIFIED",
  StorageClassDestinationBucketDefault: "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT",
  StorageClassPreserve: "STORAGE_CLASS_PRESERVE",
  StorageClassStandard: "STORAGE_CLASS_STANDARD",
  StorageClassNearline: "STORAGE_CLASS_NEARLINE",
  StorageClassColdline: "STORAGE_CLASS_COLDLINE",
  StorageClassArchive: "STORAGE_CLASS_ARCHIVE",
} as const;
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass] | (string & {});

export const storageClassSchema: EnumSchema<StorageClass> = s.enumOf<StorageClass>(StorageClass);
