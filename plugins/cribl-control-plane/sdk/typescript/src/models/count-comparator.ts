import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Operation to be applied over the results count */
export const CountComparator = {
  U003E: ">",
  U003C: "<",
  U003DU003DU003D: "===",
  U0021U003DU003D: "!==",
  U003EU003D: ">=",
  U003CU003D: "<=",
} as const;
export type CountComparator = (typeof CountComparator)[keyof typeof CountComparator] | (string & {});

export const countComparatorSchema: EnumSchema<CountComparator> = s.enumOf<CountComparator>(CountComparator);
