import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payment-service-token`. */
export const Type57 = {
  PaymentServiceToken: "payment-service-token",
} as const;
export type Type57 = (typeof Type57)[keyof typeof Type57] | (string & {});

export const type57Schema: EnumSchema<Type57> = s.enumOf<Type57>(Type57);
