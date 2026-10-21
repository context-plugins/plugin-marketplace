import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to handle events when disk space is below the global 'Min free disk space' limit */
export const DiskSpaceProtection = {
  Block: "block",
  Drop: "drop",
} as const;
export type DiskSpaceProtection =
  | (typeof DiskSpaceProtection)[keyof typeof DiskSpaceProtection]
  | (string & {});

export const diskSpaceProtectionSchema: EnumSchema<DiskSpaceProtection> =
  s.enumOf<DiskSpaceProtection>(DiskSpaceProtection);
