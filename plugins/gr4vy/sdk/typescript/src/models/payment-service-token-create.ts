import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { redirectUrl8Schema, type RedirectUrl8 } from "./unions/redirect-url8.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

export type PaymentServiceTokenCreate = {
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
  /** The ID of the payment method to use. */
  paymentServiceId: string;
  /** The redirect URL to redirect a buyer to after they have authorized the payment method. */
  redirectUrl: RedirectUrl8;
};

export const paymentServiceTokenCreateSchema: Schema<PaymentServiceTokenCreate> =
  s.object<PaymentServiceTokenCreate>({
    securityCode: s.optional(s.lazy(() => securityCodeSchema)),
    paymentServiceId: s.string(),
    redirectUrl: redirectUrl8Schema,
    _keysMap: {
      securityCode: "security_code",
      paymentServiceId: "payment_service_id",
      redirectUrl: "redirect_url",
    },
  });
