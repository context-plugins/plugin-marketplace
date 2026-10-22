import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `transaction`. */
export const Type70 = {
  Transaction: "transaction",
} as const;
export type Type70 = (typeof Type70)[keyof typeof Type70] | (string & {});

export const type70Schema: EnumSchema<Type70> = s.enumOf<Type70>(Type70);
