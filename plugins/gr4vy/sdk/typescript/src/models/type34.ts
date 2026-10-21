import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `gift-card-redemption`. */
export const Type34 = {
  GiftCardRedemption: "gift-card-redemption",
} as const;
export type Type34 = (typeof Type34)[keyof typeof Type34] | (string & {});

export const type34Schema: EnumSchema<Type34> = s.enumOf<Type34>(Type34);
