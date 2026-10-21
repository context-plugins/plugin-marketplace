import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier9Schema,
  type BuyerExternalIdentifier9,
} from "./unions/buyer-external-identifier9.js";
import { buyerId9Schema, type BuyerId9 } from "./unions/buyer-id9.js";
import { externalIdentifier14Schema, type ExternalIdentifier14 } from "./unions/external-identifier14.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

/**
 * Create a Click to Pay payment with a decrypted token and cryptogram. This is mainly used
 * internally but can be used by anyone with their own C2P integration.
 */
export type ClickToPayPaymentMethodCreate = {
  /** Aways `click-to-pay`. @default "click-to-pay" */
  method?: "click-to-pay";
  /** The device token. */
  token: string;
  /** The payment cryptogram for the device token. */
  cryptogram: string;
  /** The expiration date of the device token. */
  expirationDate: string;
  /** The ID of the buyer to associate this transaction to. */
  buyerId?: BuyerId9;
  /** The external identifier of the buyer to create a transaction for. */
  buyerExternalIdentifier?: BuyerExternalIdentifier9;
  /** The external identifier of the payment method to filter by. */
  externalIdentifier?: ExternalIdentifier14;
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
};

export const clickToPayPaymentMethodCreateSchema: Schema<ClickToPayPaymentMethodCreate> =
  s.object<ClickToPayPaymentMethodCreate>({
    method: s.defaulted(s.literal("click-to-pay"), "click-to-pay"),
    token: s.string(),
    cryptogram: s.string(),
    expirationDate: s.string(),
    buyerId: s.optional(s.lazy(() => buyerId9Schema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier9Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier14Schema)),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    _keysMap: {
      expirationDate: "expiration_date",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
      redirectUrl: "redirect_url",
    },
  });
