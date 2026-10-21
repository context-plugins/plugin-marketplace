import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payment-method`. */
export const Type52 = {
  PaymentMethod: "payment-method",
} as const;
export type Type52 = (typeof Type52)[keyof typeof Type52] | (string & {});

export const type52Schema: EnumSchema<Type52> = s.enumOf<Type52>(Type52);
