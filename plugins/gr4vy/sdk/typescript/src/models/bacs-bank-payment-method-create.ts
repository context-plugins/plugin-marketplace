import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolder1Schema, type BankAccountHolder1 } from "./bank-account-holder1.js";
import { Method1, method1Schema } from "./method1.js";
import { Scheme1, scheme1Schema } from "./scheme1.js";
import {
  buyerExternalIdentifierSchema,
  type BuyerExternalIdentifier,
} from "./unions/buyer-external-identifier.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";

/**
 * BACS Bank Payment Method
 *
 * Bank Payment Method for BACS bank accounts.
 */
export type BacsBankPaymentMethodCreate = {
  /** Always `bank`. @default Method1.Bank */
  method?: Method1;
  /** The account holder for this bank account */
  accountHolder: BankAccountHolder1;
  /** The ID of the buyer to attach the method to. */
  buyerId?: BuyerId;
  /** The merchant reference for this payment method. */
  buyerExternalIdentifier?: BuyerExternalIdentifier;
  /** The merchant identifier for this payment method. */
  externalIdentifier?: ExternalIdentifier;
  /** Always `bacs`. @default Scheme1.Bacs */
  scheme?: Scheme1;
  /** The account number for this BACS bank account */
  accountNumber: string;
  /** The sort code for this BACS bank account */
  routingNumber: string;
};

export const bacsBankPaymentMethodCreateSchema: Schema<BacsBankPaymentMethodCreate> =
  s.object<BacsBankPaymentMethodCreate>({
    method: s.defaulted(method1Schema, Method1.Bank),
    accountHolder: bankAccountHolder1Schema,
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifierSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    scheme: s.defaulted(scheme1Schema, Scheme1.Bacs),
    accountNumber: s.string(),
    routingNumber: s.string(),
    _keysMap: {
      accountHolder: "account_holder",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
      accountNumber: "account_number",
      routingNumber: "routing_number",
    },
  });
