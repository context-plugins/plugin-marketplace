import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type8, type8Schema } from "./type8.js";
import { accountNumber4Schema, type AccountNumber4 } from "./unions/account-number4.js";
import { billingDetails1Schema, type BillingDetails1 } from "./unions/billing-details1.js";
import { displayName1Schema, type DisplayName1 } from "./unions/display-name1.js";
import { externalIdentifier3Schema, type ExternalIdentifier3 } from "./unions/external-identifier3.js";
import { id6Schema, type Id6 } from "./unions/id6.js";
import { reconciliationIdSchema, type ReconciliationId } from "./unions/reconciliation-id.js";

export type TransactionBuyer = {
  /** Always `buyer`. @default Type8.Buyer */
  type?: Type8;
  /** The ID for the buyer. */
  id?: Id6;
  /**
   * The base62 encoded buyer ID. This represents a shorter version of this buyer's `id` which is
   * sent to payment services, anti-fraud services, and other connectors. You can use this ID to
   * reconcile a payment service's buyer against our system.
   */
  reconciliationId?: ReconciliationId;
  /** The display name for the buyer. */
  displayName?: DisplayName1;
  /** The merchant identifier for this buyer. */
  externalIdentifier?: ExternalIdentifier3;
  /** The billing name, address, email, and other fields for this buyer. */
  billingDetails?: BillingDetails1;
  /** The buyer account number. */
  accountNumber?: AccountNumber4;
};

export const transactionBuyerSchema: Schema<TransactionBuyer> = s.object<TransactionBuyer>({
  type: s.defaulted(type8Schema, Type8.Buyer),
  id: s.optional(s.lazy(() => id6Schema)),
  reconciliationId: s.optional(s.lazy(() => reconciliationIdSchema)),
  displayName: s.optional(s.lazy(() => displayName1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier3Schema)),
  billingDetails: s.optional(s.lazy(() => billingDetails1Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumber4Schema)),
  _keysMap: {
    reconciliationId: "reconciliation_id",
    displayName: "display_name",
    externalIdentifier: "external_identifier",
    billingDetails: "billing_details",
    accountNumber: "account_number",
  },
});
