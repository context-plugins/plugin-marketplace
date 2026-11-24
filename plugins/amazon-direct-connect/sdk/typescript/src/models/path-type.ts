import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an
 * unordered AS_SET).
 */
export const PathType = {
  Seq: "seq",
  Set: "set",
} as const;
export type PathType = (typeof PathType)[keyof typeof PathType] | (string & {});

export const pathTypeSchema: EnumSchema<PathType> = s.enumOf<PathType>(PathType);
