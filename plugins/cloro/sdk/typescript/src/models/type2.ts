import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sub-type discriminator. TEXT ads carry `domain` + `description`; SHOPPING ads carry `price` +
 * `store` (+ optional `old_price`). Always present.
 */
export const Type2 = {
  Text: "TEXT",
  Shopping: "SHOPPING",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
