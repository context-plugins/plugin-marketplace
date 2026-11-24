import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Comparator5 = {
  U003D: "=",
  U0021U003D: "!=",
} as const;
export type Comparator5 = (typeof Comparator5)[keyof typeof Comparator5] | (string & {});

export const comparator5Schema: EnumSchema<Comparator5> = s.enumOf<Comparator5>(Comparator5);
