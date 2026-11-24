import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm used to generate the checksum for the block, such as SHA256. */
export const ChecksumAlgorithm = {
  Sha256: "SHA256",
} as const;
export type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm] | (string & {});

export const checksumAlgorithmSchema: EnumSchema<ChecksumAlgorithm> =
  s.enumOf<ChecksumAlgorithm>(ChecksumAlgorithm);
