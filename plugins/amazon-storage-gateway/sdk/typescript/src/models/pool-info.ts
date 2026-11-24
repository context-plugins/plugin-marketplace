import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { poolStatusSchema, type PoolStatus } from "./pool-status.js";
import { retentionLockType1Schema, type RetentionLockType1 } from "./retention-lock-type1.js";
import { storageClass1Schema, type StorageClass1 } from "./storage-class1.js";

export type PoolInfo = {
  /**
   * The Amazon Resource Name (ARN) of the custom tape pool. Use the ListTapePools operation to
   * return a list of custom tape pools for your account and Amazon Web Services Region.
   */
  poolArn?: string;
  /**
   * The name of the custom tape pool. PoolName can use all ASCII characters, except '/' and '\'.
   */
  poolName?: string;
  /**
   * The storage class that is associated with the custom pool. When you use your backup application
   * to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3
   * Glacier Deep Archive) that corresponds to the pool.
   */
  storageClass?: StorageClass1;
  /**
   * Tape retention lock type, which can be configured in two modes. When configured in governance
   * mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the
   * tape retention lock from archived virtual tapes. When configured in compliance mode, the tape
   * retention lock cannot be removed by any user, including the root Amazon Web Services account.
   */
  retentionLockType?: RetentionLockType1;
  /**
   * Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years
   * (36,500 days).
   */
  retentionLockTimeInDays?: number;
  /** Status of the custom tape pool. Pool can be ACTIVE or DELETED. */
  poolStatus?: PoolStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const poolInfoSchema: Schema<PoolInfo> = s.object<PoolInfo>(
  {
    poolArn: s.optional(s.string()),
    poolName: s.optional(s.string()),
    storageClass: s.optional(s.lazy(() => storageClass1Schema)),
    retentionLockType: s.optional(s.lazy(() => retentionLockType1Schema)),
    retentionLockTimeInDays: s.optional(s.int()),
    poolStatus: s.optional(s.lazy(() => poolStatusSchema)),
    _keysMap: {
      poolArn: "PoolARN",
      poolName: "PoolName",
      storageClass: "StorageClass",
      retentionLockType: "RetentionLockType",
      retentionLockTimeInDays: "RetentionLockTimeInDays",
      poolStatus: "PoolStatus",
    },
  },
  { additionalProperties: s.json() },
);
