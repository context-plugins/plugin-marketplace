import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Deprecated: Use type instead. */
export const DiskType = {
  DiskTypeUnspecified: "DISK_TYPE_UNSPECIFIED",
  HyperdiskBalanced: "HYPERDISK_BALANCED",
  HyperdiskExtreme: "HYPERDISK_EXTREME",
  HyperdiskMl: "HYPERDISK_ML",
  HyperdiskThroughput: "HYPERDISK_THROUGHPUT",
} as const;
export type DiskType = (typeof DiskType)[keyof typeof DiskType] | (string & {});

export const diskTypeSchema: EnumSchema<DiskType> = s.enumOf<DiskType>(DiskType);
