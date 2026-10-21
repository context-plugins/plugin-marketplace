import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method8, method8Schema } from "./method8.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

export type CheckoutSessionIdPaymentMethod = {
  /** Always `id`. @default Method8.Id */
  method?: Method8;
  /** The ID of the payment method to associate to the session. */
  id: string;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
};

export const checkoutSessionIdPaymentMethodSchema: Schema<CheckoutSessionIdPaymentMethod> =
  s.object<CheckoutSessionIdPaymentMethod>({
    method: s.defaulted(method8Schema, Method8.Id),
    id: s.string(),
    securityCode: s.optional(s.lazy(() => securityCodeSchema)),
    _keysMap: {
      securityCode: "security_code",
    },
  });
