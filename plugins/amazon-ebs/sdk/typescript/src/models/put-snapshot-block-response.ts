import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checksumAlgorithm1Schema, type ChecksumAlgorithm1 } from "./checksum-algorithm1.js";

export type PutSnapshotBlockResponse = {
  /** The SHA256 checksum generated for the block data by Amazon EBS. */
  checksum?: string;
  /** The algorithm used by Amazon EBS to generate the checksum. */
  checksumAlgorithm?: ChecksumAlgorithm1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putSnapshotBlockResponseSchema: Schema<PutSnapshotBlockResponse> =
  s.object<PutSnapshotBlockResponse>(
    {
      checksum: s.optional(s.string()),
      checksumAlgorithm: s.optional(s.lazy(() => checksumAlgorithm1Schema)),
      _keysMap: {
        checksum: "Checksum",
        checksumAlgorithm: "ChecksumAlgorithm",
      },
    },
    { additionalProperties: s.json() },
  );
