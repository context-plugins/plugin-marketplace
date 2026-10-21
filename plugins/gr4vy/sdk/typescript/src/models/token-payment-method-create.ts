import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method8, method8Schema } from "./method8.js";
import { preferredScheme1Schema, type PreferredScheme1 } from "./unions/preferred-scheme1.js";
import { redirectUrl11Schema, type RedirectUrl11 } from "./unions/redirect-url11.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

/**
 * Create a transaction with the ID (token) of a stored payment method (and an optional URL for
 * approval)
 */
export type TokenPaymentMethodCreate = {
  /** The ID for the payment method. */
  id: string;
  /** Always `id`. @default Method8.Id */
  method?: Method8;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
  /** The preferred card scheme to use when processing a co-badged card. */
  preferredScheme?: PreferredScheme1;
  /** The URL to redirect a user back to after they approve the transaction in the browser. */
  redirectUrl?: RedirectUrl11;
};

export const tokenPaymentMethodCreateSchema: Schema<TokenPaymentMethodCreate> =
  s.object<TokenPaymentMethodCreate>({
    id: s.string(),
    method: s.defaulted(method8Schema, Method8.Id),
    securityCode: s.optional(s.lazy(() => securityCodeSchema)),
    preferredScheme: s.optional(s.lazy(() => preferredScheme1Schema)),
    redirectUrl: s.optional(s.lazy(() => redirectUrl11Schema)),
    _keysMap: {
      securityCode: "security_code",
      preferredScheme: "preferred_scheme",
      redirectUrl: "redirect_url",
    },
  });
