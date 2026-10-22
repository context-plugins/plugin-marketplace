import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `checkout-session` */
export const Method9 = {
  CheckoutSession: "checkout-session",
} as const;
export type Method9 = (typeof Method9)[keyof typeof Method9] | (string & {});

export const method9Schema: EnumSchema<Method9> = s.enumOf<Method9>(Method9);
