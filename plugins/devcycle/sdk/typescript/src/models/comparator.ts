import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparator to use */
export const Comparator = {
  U003D: "=",
  U0021U003D: "!=",
  Exist: "exist",
  Exist2: "!exist",
  Contain: "contain",
  Contain2: "!contain",
  StartWith: "startWith",
  StartWith2: "!startWith",
  EndWith: "endWith",
  EndWith2: "!endWith",
} as const;
export type Comparator = (typeof Comparator)[keyof typeof Comparator] | (string & {});

export const comparatorSchema: EnumSchema<Comparator> = s.enumOf<Comparator>(Comparator);
