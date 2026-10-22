import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `merchant-account`. */
export const Type37 = {
  MerchantAccount: "merchant-account",
} as const;
export type Type37 = (typeof Type37)[keyof typeof Type37] | (string & {});

export const type37Schema: EnumSchema<Type37> = s.enumOf<Type37>(Type37);
