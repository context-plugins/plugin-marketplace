import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By
 * default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and
 * ignored for other transfers.
 */
export const Gid = {
  GidUnspecified: "GID_UNSPECIFIED",
  GidSkip: "GID_SKIP",
  GidNumber: "GID_NUMBER",
} as const;
export type Gid = (typeof Gid)[keyof typeof Gid] | (string & {});

export const gidSchema: EnumSchema<Gid> = s.enumOf<Gid>(Gid);
