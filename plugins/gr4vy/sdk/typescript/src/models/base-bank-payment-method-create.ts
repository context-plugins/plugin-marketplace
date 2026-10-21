import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolder1Schema, type BankAccountHolder1 } from "./bank-account-holder1.js";
import { Method1, method1Schema } from "./method1.js";
import {
  buyerExternalIdentifierSchema,
  type BuyerExternalIdentifier,
} from "./unions/buyer-external-identifier.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";

/** Base class for Bank Payment Methods. */
export type BaseBankPaymentMethodCreate = {
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
};

export const baseBankPaymentMethodCreateSchema: Schema<BaseBankPaymentMethodCreate> =
  s.object<BaseBankPaymentMethodCreate>({
    method: s.defaulted(method1Schema, Method1.Bank),
    accountHolder: bankAccountHolder1Schema,
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifierSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    _keysMap: {
      accountHolder: "account_holder",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
    },
  });
