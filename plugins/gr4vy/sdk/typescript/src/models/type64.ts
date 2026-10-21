import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `report`. */
export const Type64 = {
  Report: "report",
} as const;
export type Type64 = (typeof Type64)[keyof typeof Type64] | (string & {});

export const type64Schema: EnumSchema<Type64> = s.enumOf<Type64>(Type64);
