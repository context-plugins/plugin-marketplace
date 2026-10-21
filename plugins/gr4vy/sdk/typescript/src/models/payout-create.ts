import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier14Schema,
  type BuyerExternalIdentifier14,
} from "./unions/buyer-external-identifier14.js";
import { buyerId17Schema, type BuyerId17 } from "./unions/buyer-id17.js";
import { buyer16Schema, type Buyer16 } from "./unions/buyer16.js";
import { categorySchema, type Category } from "./unions/category.js";
import {
  connectionOptionsModelSchema,
  type ConnectionOptionsModel,
} from "./unions/connection-options-model.js";
import { externalIdentifier24Schema, type ExternalIdentifier24 } from "./unions/external-identifier24.js";
import { merchantSchema, type Merchant } from "./unions/merchant.js";
import { paymentMethod1Schema, type PaymentMethod1 } from "./unions/payment-method1.js";

/**
 * PayoutCreate
 *
 * Represents the data required to create a new payout.
 */
export type PayoutCreate = {
  /**
   * The monetary amount for this payout, in the smallest currency unit for the given currency, for
   * example `1299` cents to create an authorization for $12.99.
   */
  amount: number;
  /** The ISO-4217 currency code for this payout. */
  currency: string;
  /** The ID of the payment service to use for the payout. */
  paymentServiceId: string;
  /** The type of payment method to send funds too. */
  paymentMethod: PaymentMethod1;
  /** The type of payout to process. */
  category?: Category;
  /** A value that can be used to match the payout against your own records. */
  externalIdentifier?: ExternalIdentifier24;
  /**
   * The `id` of a stored buyer to use for this payout Use this instead of the `buyer` or
   * `buyer_external_identifier`.
   */
  buyerId?: BuyerId17;
  /**
   * Inline buyer details for the payout. Use this instead of the `buyer_id` or
   * `buyer_external_identifier`.
   */
  buyer?: Buyer16;
  /**
   * The `external_identifier` of a stored buyer to use for this payout. Use this instead of the
   * `buyer_id` or `buyer`.
   */
  buyerExternalIdentifier?: BuyerExternalIdentifier14;
  /** Merchant information for the source of the payout. */
  merchant?: Merchant;
  /** Optional fields for processing payouts on specific payment services. */
  connectionOptions?: ConnectionOptionsModel;
};

export const payoutCreateSchema: Schema<PayoutCreate> = s.object<PayoutCreate>({
  amount: s.int(),
  currency: s.string(),
  paymentServiceId: s.string(),
  paymentMethod: paymentMethod1Schema,
  category: s.optional(s.lazy(() => categorySchema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier24Schema)),
  buyerId: s.optional(s.lazy(() => buyerId17Schema)),
  buyer: s.optional(s.lazy(() => buyer16Schema)),
  buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier14Schema)),
  merchant: s.optional(s.lazy(() => merchantSchema)),
  connectionOptions: s.optional(s.lazy(() => connectionOptionsModelSchema)),
  _keysMap: {
    paymentServiceId: "payment_service_id",
    paymentMethod: "payment_method",
    externalIdentifier: "external_identifier",
    buyerId: "buyer_id",
    buyerExternalIdentifier: "buyer_external_identifier",
    connectionOptions: "connection_options",
  },
});
