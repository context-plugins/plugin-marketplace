import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { AccountType, accountTypeSchema } from "./account-type.js";
import { bankAccountHolder1Schema, type BankAccountHolder1 } from "./bank-account-holder1.js";
import { Method1, method1Schema } from "./method1.js";
import { Scheme, schemeSchema } from "./scheme.js";
import {
  buyerExternalIdentifierSchema,
  type BuyerExternalIdentifier,
} from "./unions/buyer-external-identifier.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";

/**
 * ACH Bank Payment Method
 *
 * Bank Payment Method for ACH bank accounts.
 */
export type AchBankPaymentMethodCreate = {
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
  /** Always `ach`. @default Scheme.Ach */
  scheme?: Scheme;
  /** The account number for this ACH bank account */
  accountNumber: string;
  /** The routing number for this ACH bank account */
  routingNumber: string;
  /** Whether the account number is tokenized @default false */
  isTokenized?: boolean;
  /**
   * Specify whether this is a `checking` or `savings` account. Defaults to `checking`.
   *
   * @default AccountType.Checking
   */
  accountType?: AccountType;
};

export const achBankPaymentMethodCreateSchema: Schema<AchBankPaymentMethodCreate> =
  s.object<AchBankPaymentMethodCreate>({
    method: s.defaulted(method1Schema, Method1.Bank),
    accountHolder: bankAccountHolder1Schema,
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifierSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    scheme: s.defaulted(schemeSchema, Scheme.Ach),
    accountNumber: s.string(),
    routingNumber: s.string(),
    isTokenized: s.defaulted(s.boolean(), false),
    accountType: s.defaulted(accountTypeSchema, AccountType.Checking),
    _keysMap: {
      accountHolder: "account_holder",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
      accountNumber: "account_number",
      routingNumber: "routing_number",
      isTokenized: "is_tokenized",
      accountType: "account_type",
    },
  });
