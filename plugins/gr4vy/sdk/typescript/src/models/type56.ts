import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `payment-service-definition`. */
export const Type56 = {
  PaymentServiceDefinition: "payment-service-definition",
} as const;
export type Type56 = (typeof Type56)[keyof typeof Type56] | (string & {});

export const type56Schema: EnumSchema<Type56> = s.enumOf<Type56>(Type56);
