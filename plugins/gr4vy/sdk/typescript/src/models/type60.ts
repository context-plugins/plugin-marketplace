import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payout`. */
export const Type60 = {
  Payout: "payout",
} as const;
export type Type60 = (typeof Type60)[keyof typeof Type60] | (string & {});

export const type60Schema: EnumSchema<Type60> = s.enumOf<Type60>(Type60);
