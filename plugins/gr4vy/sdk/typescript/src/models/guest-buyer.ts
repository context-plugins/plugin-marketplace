import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNumberSchema, type AccountNumber } from "./unions/account-number.js";
import { billingDetails1Schema, type BillingDetails1 } from "./unions/billing-details1.js";
import { displayName1Schema, type DisplayName1 } from "./unions/display-name1.js";
import { externalIdentifier3Schema, type ExternalIdentifier3 } from "./unions/external-identifier3.js";
import { shippingDetails1Schema, type ShippingDetails1 } from "./unions/shipping-details1.js";

export type GuestBuyer = {
  /** The display name for the buyer. */
  displayName?: DisplayName1;
  /** The merchant identifier for this buyer. */
  externalIdentifier?: ExternalIdentifier3;
  /** The billing name, address, email, and other fields for this buyer. */
  billingDetails?: BillingDetails1;
  /** The buyer account number */
  accountNumber?: AccountNumber;
  /** The optional shipping details for this buyer. */
  shippingDetails?: ShippingDetails1;
};

export const guestBuyerSchema: Schema<GuestBuyer> = s.object<GuestBuyer>({
  displayName: s.optional(s.lazy(() => displayName1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier3Schema)),
  billingDetails: s.optional(s.lazy(() => billingDetails1Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumberSchema)),
  shippingDetails: s.optional(s.lazy(() => shippingDetails1Schema)),
  _keysMap: {
    displayName: "display_name",
    externalIdentifier: "external_identifier",
    billingDetails: "billing_details",
    accountNumber: "account_number",
    shippingDetails: "shipping_details",
  },
});
