import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `gift-card`. */
export const Type31 = {
  GiftCard: "gift-card",
} as const;
export type Type31 = (typeof Type31)[keyof typeof Type31] | (string & {});

export const type31Schema: EnumSchema<Type31> = s.enumOf<Type31>(Type31);
