import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. A POSIX Filesystem data source. */
export type PosixFilesystem1 = {
  /** Root directory path to the filesystem. */
  rootDirectory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const posixFilesystem1Schema: Schema<PosixFilesystem1> = s.object<PosixFilesystem1>(
  {
    rootDirectory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
