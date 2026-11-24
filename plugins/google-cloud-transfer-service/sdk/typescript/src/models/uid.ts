import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By
 * default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and
 * ignored for other transfers.
 */
export const Uid = {
  UidUnspecified: "UID_UNSPECIFIED",
  UidSkip: "UID_SKIP",
  UidNumber: "UID_NUMBER",
} as const;
export type Uid = (typeof Uid)[keyof typeof Uid] | (string & {});

export const uidSchema: EnumSchema<Uid> = s.enumOf<Uid>(Uid);
