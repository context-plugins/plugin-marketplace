import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method9, method9Schema } from "./method9.js";
import {
  buyerExternalIdentifier6Schema,
  type BuyerExternalIdentifier6,
} from "./unions/buyer-external-identifier6.js";
import { buyerId6Schema, type BuyerId6 } from "./unions/buyer-id6.js";
import { externalIdentifier11Schema, type ExternalIdentifier11 } from "./unions/external-identifier11.js";
import { preferredScheme1Schema, type PreferredScheme1 } from "./unions/preferred-scheme1.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

/** Create a payment with a checkout session ID (and an optional URL for 3DS). */
export type CheckoutSessionWithUrlPaymentMethodCreate = {
  /** Always `checkout-session` @default Method9.CheckoutSession */
  method?: Method9;
  /** The ID for the checkout session. */
  id: string;
  /**
   * The merchant reference that can be used to match the payment method against your own records.
   */
  externalIdentifier?: ExternalIdentifier11;
  /** The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`. */
  buyerId?: BuyerId6;
  /** The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`. */
  buyerExternalIdentifier?: BuyerExternalIdentifier6;
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
  /** The preferred card scheme to use when processing a co-badged card. */
  preferredScheme?: PreferredScheme1;
};

export const checkoutSessionWithUrlPaymentMethodCreateSchema: Schema<CheckoutSessionWithUrlPaymentMethodCreate> =
  s.object<CheckoutSessionWithUrlPaymentMethodCreate>({
    method: s.defaulted(method9Schema, Method9.CheckoutSession),
    id: s.string(),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier11Schema)),
    buyerId: s.optional(s.lazy(() => buyerId6Schema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier6Schema)),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    preferredScheme: s.optional(s.lazy(() => preferredScheme1Schema)),
    _keysMap: {
      externalIdentifier: "external_identifier",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      redirectUrl: "redirect_url",
      preferredScheme: "preferred_scheme",
    },
  });
