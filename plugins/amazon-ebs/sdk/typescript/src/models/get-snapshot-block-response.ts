import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checksumAlgorithmSchema, type ChecksumAlgorithm } from "./checksum-algorithm.js";

export type GetSnapshotBlockResponse = {
  /** The size of the data in the block. */
  dataLength?: number;
  /** The data content of the block. */
  blockData?: string;
  /** The checksum generated for the block, which is Base64 encoded. */
  checksum?: string;
  /** The algorithm used to generate the checksum for the block, such as SHA256. */
  checksumAlgorithm?: ChecksumAlgorithm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSnapshotBlockResponseSchema: Schema<GetSnapshotBlockResponse> =
  s.object<GetSnapshotBlockResponse>(
    {
      dataLength: s.optional(s.int()),
      blockData: s.optional(s.string()),
      checksum: s.optional(s.string()),
      checksumAlgorithm: s.optional(s.lazy(() => checksumAlgorithmSchema)),
      _keysMap: {
        dataLength: "DataLength",
        blockData: "BlockData",
        checksum: "Checksum",
        checksumAlgorithm: "ChecksumAlgorithm",
      },
    },
    { additionalProperties: s.json() },
  );
