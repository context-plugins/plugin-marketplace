import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method21Schema, type Method21 } from "./method21.js";
import {
  buyerExternalIdentifier6Schema,
  type BuyerExternalIdentifier6,
} from "./unions/buyer-external-identifier6.js";
import { buyerId6Schema, type BuyerId6 } from "./unions/buyer-id6.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";
import { redirectUrl8Schema, type RedirectUrl8 } from "./unions/redirect-url8.js";

/** Create a transaction for an APM/LPM that requires a redirect. */
export type RedirectPaymentMethodCreate = {
  /** The method to use, this can be any of the methods that support redirect requests. */
  method: Method21;
  /** The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`. */
  buyerId?: BuyerId6;
  /** The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`. */
  buyerExternalIdentifier?: BuyerExternalIdentifier6;
  /**
   * The 2-letter ISO code of the country to use this payment method for. This is used to select the
   * payment service to use.
   */
  country: string;
  /**
   * The ISO-4217 currency code to use this payment method for. This is used to select the payment
   * service to use.
   */
  currency: string;
  /** The redirect URL to redirect a buyer to after they have authorized the payment method. */
  redirectUrl: RedirectUrl8;
  /** The merchant identifier for this payment method. */
  externalIdentifier?: ExternalIdentifier;
};

export const redirectPaymentMethodCreateSchema: Schema<RedirectPaymentMethodCreate> =
  s.object<RedirectPaymentMethodCreate>({
    method: method21Schema,
    buyerId: s.optional(s.lazy(() => buyerId6Schema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier6Schema)),
    country: s.string(),
    currency: s.string(),
    redirectUrl: redirectUrl8Schema,
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    _keysMap: {
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      redirectUrl: "redirect_url",
      externalIdentifier: "external_identifier",
    },
  });
