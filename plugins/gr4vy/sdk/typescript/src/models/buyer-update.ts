import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNumberSchema, type AccountNumber } from "./unions/account-number.js";
import { billingDetails1Schema, type BillingDetails1 } from "./unions/billing-details1.js";
import { displayName1Schema, type DisplayName1 } from "./unions/display-name1.js";
import { externalIdentifier3Schema, type ExternalIdentifier3 } from "./unions/external-identifier3.js";

/** Request body for updating an existing buyer */
export type BuyerUpdate = {
  /** The display name for the buyer. */
  displayName?: DisplayName1;
  /** The merchant identifier for this buyer. */
  externalIdentifier?: ExternalIdentifier3;
  /** The buyer account number */
  accountNumber?: AccountNumber;
  /** The billing name, address, email, and other fields for this buyer. */
  billingDetails?: BillingDetails1;
};

export const buyerUpdateSchema: Schema<BuyerUpdate> = s.object<BuyerUpdate>({
  displayName: s.optional(s.lazy(() => displayName1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier3Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumberSchema)),
  billingDetails: s.optional(s.lazy(() => billingDetails1Schema)),
  _keysMap: {
    displayName: "display_name",
    externalIdentifier: "external_identifier",
    accountNumber: "account_number",
    billingDetails: "billing_details",
  },
});
