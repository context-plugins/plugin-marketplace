import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1 = {
  Standard: "standard",
  _2Up: "2up",
  Dutching: "dutching",
  EachWay: "each-way",
  ExtraPlace: "extra-place",
  Bog: "bog",
  TwoUp: "two-up",
  EachWay2: "each_way",
  ExtraPlace2: "extra_place",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
