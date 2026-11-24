import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type classification of the group */
export const Type1 = {
  Local: "Local",
  DirectoryGroup: "DirectoryGroup",
  RoboticsGroup: "RoboticsGroup",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
