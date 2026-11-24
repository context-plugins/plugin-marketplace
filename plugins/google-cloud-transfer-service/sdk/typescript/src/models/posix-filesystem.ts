import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A POSIX filesystem resource. */
export type PosixFilesystem = {
  /** Root directory path to the filesystem. */
  rootDirectory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const posixFilesystemSchema: Schema<PosixFilesystem> = s.object<PosixFilesystem>(
  {
    rootDirectory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
