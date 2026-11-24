import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangedBlock = {
  /** The block index. */
  blockIndex?: number;
  /**
   * The block token for the block index of the FirstSnapshotId specified in the ListChangedBlocks
   * operation. This value is absent if the first snapshot does not have the changed block that is
   * on the second snapshot.
   */
  firstBlockToken?: string;
  /**
   * The block token for the block index of the SecondSnapshotId specified in the ListChangedBlocks
   * operation.
   */
  secondBlockToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changedBlockSchema: Schema<ChangedBlock> = s.object<ChangedBlock>(
  {
    blockIndex: s.optional(s.int()),
    firstBlockToken: s.optional(s.string()),
    secondBlockToken: s.optional(s.string()),
    _keysMap: {
      blockIndex: "BlockIndex",
      firstBlockToken: "FirstBlockToken",
      secondBlockToken: "SecondBlockToken",
    },
  },
  { additionalProperties: s.json() },
);
