import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each file's mode attribute should be handled by the transfer. By default, mode is
 * not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other
 * transfers.
 */
export const Mode = {
  ModeUnspecified: "MODE_UNSPECIFIED",
  ModeSkip: "MODE_SKIP",
  ModePreserve: "MODE_PRESERVE",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
