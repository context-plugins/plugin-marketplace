import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional type classification for the update. */
export const UpdateType = {
  Actionable: "ACTIONABLE",
  Informative: "INFORMATIVE",
} as const;
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType] | (string & {});

export const updateTypeSchema: EnumSchema<UpdateType> = s.enumOf<UpdateType>(UpdateType);
