import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `merchant`. */
export const Type58 = {
  Merchant: "merchant",
} as const;
export type Type58 = (typeof Type58)[keyof typeof Type58] | (string & {});

export const type58Schema: EnumSchema<Type58> = s.enumOf<Type58>(Type58);
