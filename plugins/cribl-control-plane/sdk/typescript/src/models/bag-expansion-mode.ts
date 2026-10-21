import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** decides if bag-values are expanded to bags or arrays */
export const BagExpansionMode = {
  Bag: "bag",
  Array: "array",
} as const;
export type BagExpansionMode = (typeof BagExpansionMode)[keyof typeof BagExpansionMode] | (string & {});

export const bagExpansionModeSchema: EnumSchema<BagExpansionMode> =
  s.enumOf<BagExpansionMode>(BagExpansionMode);
