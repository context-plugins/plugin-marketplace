import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The logic operator between filters of the same group. */
export const GroupType = {
  And: "AND",
} as const;
export type GroupType = (typeof GroupType)[keyof typeof GroupType] | (string & {});

export const groupTypeSchema: EnumSchema<GroupType> = s.enumOf<GroupType>(GroupType);
