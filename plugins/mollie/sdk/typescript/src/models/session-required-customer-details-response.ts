import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Customer details that should be collected during checkout. */
export const SessionRequiredCustomerDetailsResponse = {
  Email: "email",
  BillingAddress: "billing-address",
  ShippingAddress: "shipping-address",
} as const;
export type SessionRequiredCustomerDetailsResponse =
  | (typeof SessionRequiredCustomerDetailsResponse)[keyof typeof SessionRequiredCustomerDetailsResponse]
  | (string & {});

export const sessionRequiredCustomerDetailsResponseSchema: EnumSchema<SessionRequiredCustomerDetailsResponse> =
  s.enumOf<SessionRequiredCustomerDetailsResponse>(SessionRequiredCustomerDetailsResponse);
