import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airline13Schema, type Airline13 } from "./unions/airline13.js";
import { amount9Schema, type Amount9 } from "./unions/amount9.js";
import { cartItemsSchema, type CartItems } from "./unions/cart-items.js";
import { externalIdentifier6Schema, type ExternalIdentifier6 } from "./unions/external-identifier6.js";
import { tracking111Schema, type Tracking111 } from "./unions/tracking111.js";

/** Request body for capturing an authorized transaction. */
export type TransactionCaptureCreate = {
  /**
   * The amount to capture, in the smallest currency unit (e.g., cents). This must be less than or
   * equal to the authorized amount, unless over-capture is available.
   */
  amount?: Amount9;
  /** The airline data to submit to the payment service during the capture call. */
  airline?: Airline13;
  /** An array of cart items that represents the line items of this capture. */
  cartItems?: CartItems;
  /** An array of shipment tracking details for this capture. */
  tracking?: Tracking111;
  /**
   * Whether this is marked as the final capture for the associated transaction. Must be `true` or
   * omitted when multi-capture is not enabled; a value of `false` is only valid when multi-capture
   * is available on the connection.
   *
   * @default true
   */
  final?: boolean;
  /** An external identifier that can be used to match the capture against your own records. */
  externalIdentifier?: ExternalIdentifier6;
  /**
   * Whether this capture request should re-authorize the transaction if it has expired.
   *
   * @default false
   */
  reauthorizeIfAuthorizationExpired?: boolean;
};

export const transactionCaptureCreateSchema: Schema<TransactionCaptureCreate> =
  s.object<TransactionCaptureCreate>({
    amount: s.optional(s.lazy(() => amount9Schema)),
    airline: s.optional(s.lazy(() => airline13Schema)),
    cartItems: s.optional(s.lazy(() => cartItemsSchema)),
    tracking: s.optional(s.lazy(() => tracking111Schema)),
    final: s.defaulted(s.boolean(), true),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier6Schema)),
    reauthorizeIfAuthorizationExpired: s.defaulted(s.boolean(), false),
    _keysMap: {
      cartItems: "cart_items",
      externalIdentifier: "external_identifier",
      reauthorizeIfAuthorizationExpired: "reauthorize_if_authorization_expired",
    },
  });
