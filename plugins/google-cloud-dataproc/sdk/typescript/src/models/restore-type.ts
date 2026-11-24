import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of restore. If unspecified, defaults to METADATA_ONLY. */
export const RestoreType = {
  RestoreTypeUnspecified: "RESTORE_TYPE_UNSPECIFIED",
  Full: "FULL",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type RestoreType = (typeof RestoreType)[keyof typeof RestoreType] | (string & {});

export const restoreTypeSchema: EnumSchema<RestoreType> = s.enumOf<RestoreType>(RestoreType);
