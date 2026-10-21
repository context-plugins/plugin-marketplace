import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payment-service`. */
export const Type59 = {
  PaymentService: "payment-service",
} as const;
export type Type59 = (typeof Type59)[keyof typeof Type59] | (string & {});

export const type59Schema: EnumSchema<Type59> = s.enumOf<Type59>(Type59);
