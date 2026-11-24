import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssignTapePoolInput = {
  /**
   * The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape
   * pool.
   */
  tapeArn: string;
  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is
   * archived in the S3 storage class that is associated with the pool. When you use your backup
   * application to eject the tape, the tape is archived directly into the storage class (S3 Glacier
   * or S3 Glacier Deep Archive) that corresponds to the pool.
   */
  poolId: string;
  /**
   * Set permissions to bypass governance retention. If the lock type of the archived tape is
   * Governance, the tape's archived age is not older than RetentionLockInDays, and the user does
   * not already have BypassGovernanceRetention, setting this to TRUE enables the user to bypass the
   * retention lock. This parameter is set to true by default for calls from the console. Valid
   * values: TRUE | FALSE
   */
  bypassGovernanceRetention?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignTapePoolInputSchema: Schema<AssignTapePoolInput> = s.object<AssignTapePoolInput>(
  {
    tapeArn: s.string(),
    poolId: s.string(),
    bypassGovernanceRetention: s.optional(s.boolean()),
    _keysMap: {
      tapeArn: "TapeARN",
      poolId: "PoolId",
      bypassGovernanceRetention: "BypassGovernanceRetention",
    },
  },
  { additionalProperties: s.json() },
);
