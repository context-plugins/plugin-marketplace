import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retentionLockTypeSchema, type RetentionLockType } from "./retention-lock-type.js";
import { storageClassSchema, type StorageClass } from "./storage-class.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateTapePoolInput = {
  /** The name of the new custom tape pool. */
  poolName: string;
  /**
   * The storage class that is associated with the new custom pool. When you use your backup
   * application to eject the tape, the tape is archived directly into the storage class (S3 Glacier
   * or S3 Glacier Deep Archive) that corresponds to the pool.
   */
  storageClass: StorageClass;
  /**
   * Tape retention lock can be configured in two modes. When configured in governance mode, Amazon
   * Web Services accounts with specific IAM permissions are authorized to remove the tape retention
   * lock from archived virtual tapes. When configured in compliance mode, the tape retention lock
   * cannot be removed by any user, including the root Amazon Web Services account.
   */
  retentionLockType?: RetentionLockType;
  /**
   * Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years
   * (36,500 days).
   */
  retentionLockTimeInDays?: number;
  /**
   * A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair. Valid
   * characters for key and value are letters, spaces, and numbers representable in UTF-8 format,
   * and the following special characters: + - = . _ : / \@. The maximum length of a tag's key is
   * 128 characters, and the maximum length for a tag's value is 256.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTapePoolInputSchema: Schema<CreateTapePoolInput> = s.object<CreateTapePoolInput>(
  {
    poolName: s.string(),
    storageClass: storageClassSchema,
    retentionLockType: s.optional(s.lazy(() => retentionLockTypeSchema)),
    retentionLockTimeInDays: s.optional(s.int()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      poolName: "PoolName",
      storageClass: "StorageClass",
      retentionLockType: "RetentionLockType",
      retentionLockTimeInDays: "RetentionLockTimeInDays",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
