import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockSchema, type Block } from "./block.js";

export type ListSnapshotBlocksResponse = {
  /** An array of objects containing information about the blocks. */
  blocks?: Block[];
  /** The time when the BlockToken expires. */
  expiryTime?: Date;
  /** The size of the volume in GB. */
  volumeSize?: number;
  /** The size of the blocks in the snapshot, in bytes. */
  blockSize?: number;
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSnapshotBlocksResponseSchema: Schema<ListSnapshotBlocksResponse> =
  s.object<ListSnapshotBlocksResponse>(
    {
      blocks: s.optional(s.array(s.lazy(() => blockSchema))),
      expiryTime: s.optional(s.dateTime()),
      volumeSize: s.optional(s.int()),
      blockSize: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        blocks: "Blocks",
        expiryTime: "ExpiryTime",
        volumeSize: "VolumeSize",
        blockSize: "BlockSize",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
