import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzChecksumAlgorithm = {
  Sha256: "SHA256",
} as const;
export type XAmzChecksumAlgorithm =
  | (typeof XAmzChecksumAlgorithm)[keyof typeof XAmzChecksumAlgorithm]
  | (string & {});

export const xAmzChecksumAlgorithmSchema: EnumSchema<XAmzChecksumAlgorithm> =
  s.enumOf<XAmzChecksumAlgorithm>(XAmzChecksumAlgorithm);
