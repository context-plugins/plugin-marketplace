import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparator to use */
export const Comparator4 = {
  U003D: "=",
  U0021U003D: "!=",
  U003E: ">",
  U003EU003D: ">=",
  U003C: "<",
  U003CU003D: "<=",
  Exist: "exist",
  Exist2: "!exist",
  Contain: "contain",
  Contain2: "!contain",
  StartWith: "startWith",
  StartWith2: "!startWith",
  EndWith: "endWith",
  EndWith2: "!endWith",
} as const;
export type Comparator4 = (typeof Comparator4)[keyof typeof Comparator4] | (string & {});

export const comparator4Schema: EnumSchema<Comparator4> = s.enumOf<Comparator4>(Comparator4);
