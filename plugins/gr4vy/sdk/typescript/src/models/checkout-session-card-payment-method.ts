import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method6, method6Schema } from "./method6.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

export type CheckoutSessionCardPaymentMethod = {
  /** Always `card`. @default Method6.Card */
  method?: Method6;
  /** The 13-19 digit number for this card. */
  number: string;
  /** The expiration date of the card, formatted `MM/YY`. */
  expirationDate: string;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
};

export const checkoutSessionCardPaymentMethodSchema: Schema<CheckoutSessionCardPaymentMethod> =
  s.object<CheckoutSessionCardPaymentMethod>({
    method: s.defaulted(method6Schema, Method6.Card),
    number: s.string(),
    expirationDate: s.string(),
    securityCode: s.optional(s.lazy(() => securityCodeSchema)),
    _keysMap: {
      expirationDate: "expiration_date",
      securityCode: "security_code",
    },
  });
