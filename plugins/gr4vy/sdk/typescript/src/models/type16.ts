import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payment-service-session`. */
export const Type16 = {
  PaymentServiceSession: "payment-service-session",
} as const;
export type Type16 = (typeof Type16)[keyof typeof Type16] | (string & {});

export const type16Schema: EnumSchema<Type16> = s.enumOf<Type16>(Type16);
