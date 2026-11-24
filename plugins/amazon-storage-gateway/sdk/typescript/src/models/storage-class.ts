import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The storage class that is associated with the new custom pool. When you use your backup
 * application to eject the tape, the tape is archived directly into the storage class (S3 Glacier
 * or S3 Glacier Deep Archive) that corresponds to the pool.
 */
export const StorageClass = {
  DeepArchive: "DEEP_ARCHIVE",
  Glacier: "GLACIER",
} as const;
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass] | (string & {});

export const storageClassSchema: EnumSchema<StorageClass> = s.enumOf<StorageClass>(StorageClass);
