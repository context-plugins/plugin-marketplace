import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Checksum of the original file. May be an array for combined diffs. */
export type ChecksumBefore = string | string[];

export const checksumBeforeSchema: Schema<ChecksumBefore> = s.of<ChecksumBefore>(
  s.union([s.string(), s.array(s.string())]),
);
