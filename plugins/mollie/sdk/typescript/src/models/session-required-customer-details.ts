import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Customer details that should be collected during checkout. */
export const SessionRequiredCustomerDetails = {
  Email: "email",
  BillingAddress: "billing-address",
  ShippingAddress: "shipping-address",
} as const;
export type SessionRequiredCustomerDetails =
  | (typeof SessionRequiredCustomerDetails)[keyof typeof SessionRequiredCustomerDetails]
  | (string & {});

export const sessionRequiredCustomerDetailsSchema: EnumSchema<SessionRequiredCustomerDetails> =
  s.enumOf<SessionRequiredCustomerDetails>(SessionRequiredCustomerDetails);
