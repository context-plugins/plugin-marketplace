import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

export type NetworkTokenCreate = {
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
  /** Defines if the request is merchant initiated or not. */
  merchantInitiated: boolean;
  /** Defines if the request is a subsequent of another request or not. */
  isSubsequentPayment: boolean;
};

export const networkTokenCreateSchema: Schema<NetworkTokenCreate> = s.object<NetworkTokenCreate>({
  securityCode: s.optional(s.lazy(() => securityCodeSchema)),
  merchantInitiated: s.boolean(),
  isSubsequentPayment: s.boolean(),
  _keysMap: {
    securityCode: "security_code",
    merchantInitiated: "merchant_initiated",
    isSubsequentPayment: "is_subsequent_payment",
  },
});
