import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparator to use */
export const Comparator2 = {
  U003D: "=",
  U0021U003D: "!=",
  U003E: ">",
  U003EU003D: ">=",
  U003C: "<",
  U003CU003D: "<=",
  Exist: "exist",
  Exist2: "!exist",
} as const;
export type Comparator2 = (typeof Comparator2)[keyof typeof Comparator2] | (string & {});

export const comparator2Schema: EnumSchema<Comparator2> = s.enumOf<Comparator2>(Comparator2);
