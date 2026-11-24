import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm used by Amazon EBS to generate the checksum. */
export const ChecksumAlgorithm1 = {
  Sha256: "SHA256",
} as const;
export type ChecksumAlgorithm1 = (typeof ChecksumAlgorithm1)[keyof typeof ChecksumAlgorithm1] | (string & {});

export const checksumAlgorithm1Schema: EnumSchema<ChecksumAlgorithm1> =
  s.enumOf<ChecksumAlgorithm1>(ChecksumAlgorithm1);
