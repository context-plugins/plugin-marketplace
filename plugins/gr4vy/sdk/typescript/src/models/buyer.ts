import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type8, type8Schema } from "./type8.js";
import { accountNumberSchema, type AccountNumber } from "./unions/account-number.js";
import { billingDetails1Schema, type BillingDetails1 } from "./unions/billing-details1.js";
import { displayName1Schema, type DisplayName1 } from "./unions/display-name1.js";
import { externalIdentifier3Schema, type ExternalIdentifier3 } from "./unions/external-identifier3.js";

export type Buyer = {
  /** Always `buyer`. @default Type8.Buyer */
  type?: Type8;
  /** The ID for the buyer. */
  id: string;
  /**
   * The base62 encoded buyer ID. This represents a shorter version of this buyer's `id` which is
   * sent to payment services, anti-fraud services, and other connectors. You can use this ID to
   * reconcile a payment service's buyer against our system.
   */
  reconciliationId: string;
  /** The ID of the merchant account this buyer belongs to. */
  merchantAccountId: string;
  /** The display name for the buyer. */
  displayName?: DisplayName1;
  /** The merchant identifier for this buyer. */
  externalIdentifier?: ExternalIdentifier3;
  /** The billing name, address, email, and other fields for this buyer. */
  billingDetails?: BillingDetails1;
  /** The buyer account number */
  accountNumber?: AccountNumber;
  /** The date this buyer was created at. */
  createdAt: Date;
  /** The date this buyer was last updated at. */
  updatedAt: Date;
};

export const buyerSchema: Schema<Buyer> = s.object<Buyer>({
  type: s.defaulted(type8Schema, Type8.Buyer),
  id: s.string(),
  reconciliationId: s.string(),
  merchantAccountId: s.string(),
  displayName: s.optional(s.lazy(() => displayName1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier3Schema)),
  billingDetails: s.optional(s.lazy(() => billingDetails1Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumberSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    reconciliationId: "reconciliation_id",
    merchantAccountId: "merchant_account_id",
    displayName: "display_name",
    externalIdentifier: "external_identifier",
    billingDetails: "billing_details",
    accountNumber: "account_number",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
