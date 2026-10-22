import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The segment's target type */
export const TargetType = {
  Included: "included",
  Excluded: "excluded",
} as const;
export type TargetType = (typeof TargetType)[keyof typeof TargetType] | (string & {});

export const targetTypeSchema: EnumSchema<TargetType> = s.enumOf<TargetType>(TargetType);
