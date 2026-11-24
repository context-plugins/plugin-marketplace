import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of restore. */
export const Type = {
  RestoreTypeUnspecified: "RESTORE_TYPE_UNSPECIFIED",
  Full: "FULL",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
