import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolder1Schema, type BankAccountHolder1 } from "./bank-account-holder1.js";
import { Method1, method1Schema } from "./method1.js";
import { Scheme2, scheme2Schema } from "./scheme2.js";
import {
  buyerExternalIdentifierSchema,
  type BuyerExternalIdentifier,
} from "./unions/buyer-external-identifier.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";
import { routingNumberSchema, type RoutingNumber } from "./unions/routing-number.js";

/**
 * SEPA Bank Payment Method
 *
 * Bank Payment Method for SEPA bank accounts.
 */
export type SepaBankPaymentMethodCreate = {
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
  /** Always `sepa`. @default Scheme2.Sepa */
  scheme?: Scheme2;
  /** The IBAN for this SEPA bank account */
  accountNumber: string;
  /** The BIC for this SEPA bank account */
  routingNumber?: RoutingNumber;
};

export const sepaBankPaymentMethodCreateSchema: Schema<SepaBankPaymentMethodCreate> =
  s.object<SepaBankPaymentMethodCreate>({
    method: s.defaulted(method1Schema, Method1.Bank),
    accountHolder: bankAccountHolder1Schema,
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifierSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    scheme: s.defaulted(scheme2Schema, Scheme2.Sepa),
    accountNumber: s.string(),
    routingNumber: s.optional(s.lazy(() => routingNumberSchema)),
    _keysMap: {
      accountHolder: "account_holder",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
      accountNumber: "account_number",
      routingNumber: "routing_number",
    },
  });
