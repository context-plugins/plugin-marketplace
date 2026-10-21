import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method20, method20Schema } from "./method20.js";
import { accountIdSchema, type AccountId } from "./unions/account-id.js";
import {
  buyerExternalIdentifierSchema,
  type BuyerExternalIdentifier,
} from "./unions/buyer-external-identifier.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { externalIdentifierSchema, type ExternalIdentifier } from "./unions/external-identifier.js";
import { paymentServiceId5Schema, type PaymentServiceId5 } from "./unions/payment-service-id5.js";

/**
 * Plaid Payment Method
 *
 * Plaid Payment Method to use in a transaction.
 */
export type PlaidPaymentMethodCreate = {
  /** Always `plaid`. @default Method20.Plaid */
  method?: Method20;
  /** The public token obtained after using Plaid Link. */
  token: string;
  /**
   * The Plaid account ID corresponding to the end-user account. If not provided will be fetched
   * from Plaid API expecting to only have one.
   */
  accountId?: AccountId;
  /**
   * The ID of the Plaid payment service related to the provided public token. If not provided will
   * be fetched from the currently active expecting to have a single one.
   */
  paymentServiceId?: PaymentServiceId5;
  /** The ID of the buyer to attach the method to. */
  buyerId?: BuyerId;
  /** The merchant reference for this payment method. */
  buyerExternalIdentifier?: BuyerExternalIdentifier;
  /** The merchant identifier for this payment method. */
  externalIdentifier?: ExternalIdentifier;
};

export const plaidPaymentMethodCreateSchema: Schema<PlaidPaymentMethodCreate> =
  s.object<PlaidPaymentMethodCreate>({
    method: s.defaulted(method20Schema, Method20.Plaid),
    token: s.string(),
    accountId: s.optional(s.lazy(() => accountIdSchema)),
    paymentServiceId: s.optional(s.lazy(() => paymentServiceId5Schema)),
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifierSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifierSchema)),
    _keysMap: {
      accountId: "account_id",
      paymentServiceId: "payment_service_id",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
      externalIdentifier: "external_identifier",
    },
  });
