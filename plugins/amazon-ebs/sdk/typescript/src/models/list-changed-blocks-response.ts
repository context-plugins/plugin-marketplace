import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { changedBlockSchema, type ChangedBlock } from "./changed-block.js";

export type ListChangedBlocksResponse = {
  /** An array of objects containing information about the changed blocks. */
  changedBlocks?: ChangedBlock[];
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

export const listChangedBlocksResponseSchema: Schema<ListChangedBlocksResponse> =
  s.object<ListChangedBlocksResponse>(
    {
      changedBlocks: s.optional(s.array(s.lazy(() => changedBlockSchema))),
      expiryTime: s.optional(s.dateTime()),
      volumeSize: s.optional(s.int()),
      blockSize: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        changedBlocks: "ChangedBlocks",
        expiryTime: "ExpiryTime",
        volumeSize: "VolumeSize",
        blockSize: "BlockSize",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
