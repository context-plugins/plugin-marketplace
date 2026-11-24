import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. A POSIX Filesystem data sink. */
export type PosixFilesystem3 = {
  /** Root directory path to the filesystem. */
  rootDirectory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const posixFilesystem3Schema: Schema<PosixFilesystem3> = s.object<PosixFilesystem3>(
  {
    rootDirectory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
