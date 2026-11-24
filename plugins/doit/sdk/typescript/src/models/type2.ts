import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Component bucket the related resource lives in. */
export const Type2 = {
  Node: "node",
  Element: "element",
  Group: "group",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
