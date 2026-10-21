import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `chargeback-reversal`. */
export const Type13 = {
  ChargebackReversal: "chargeback-reversal",
} as const;
export type Type13 = (typeof Type13)[keyof typeof Type13] | (string & {});

export const type13Schema: EnumSchema<Type13> = s.enumOf<Type13>(Type13);
