import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved.
 * Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
 */
export const Symlink = {
  SymlinkUnspecified: "SYMLINK_UNSPECIFIED",
  SymlinkSkip: "SYMLINK_SKIP",
  SymlinkPreserve: "SYMLINK_PRESERVE",
} as const;
export type Symlink = (typeof Symlink)[keyof typeof Symlink] | (string & {});

export const symlinkSchema: EnumSchema<Symlink> = s.enumOf<Symlink>(Symlink);
