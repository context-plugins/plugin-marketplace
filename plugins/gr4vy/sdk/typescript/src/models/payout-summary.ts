import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutPaymentService1Schema, type PayoutPaymentService1 } from "./payout-payment-service1.js";
import { payoutStatus1Schema, type PayoutStatus1 } from "./payout-status1.js";
import {
  transactionPaymentMethod2Schema,
  type TransactionPaymentMethod2,
} from "./transaction-payment-method2.js";
import { Type60, type60Schema } from "./type60.js";
import { buyer17Schema, type Buyer17 } from "./unions/buyer17.js";
import { categorySchema, type Category } from "./unions/category.js";
import { externalIdentifier25Schema, type ExternalIdentifier25 } from "./unions/external-identifier25.js";
import { id9Schema, type Id9 } from "./unions/id9.js";
import { merchantAccountId1Schema, type MerchantAccountId1 } from "./unions/merchant-account-id1.js";
import { merchant1Schema, type Merchant1 } from "./unions/merchant1.js";
import {
  paymentServicePayoutIdSchema,
  type PaymentServicePayoutId,
} from "./unions/payment-service-payout-id.js";

/**
 * PayoutSummary
 *
 * Represents a summary of a payout.
 */
export type PayoutSummary = {
  /** Always `payout`. @default Type60.Payout */
  type?: Type60;
  /** The ID for the payout. */
  id?: Id9;
  /**
   * The monetary amount for this payout, in the smallest currency unit for the given currency, for
   * example `1299` cents to create an authorization for $12.99.
   */
  amount: number;
  /** The buyer used for this payout. */
  buyer?: Buyer17;
  /** The type of payout to process. */
  category?: Category;
  /** The date this payout was created at. */
  createdAt: Date;
  /** A supported ISO-4217 currency code. */
  currency: string;
  /** The merchant identifier for this payout. */
  externalIdentifier?: ExternalIdentifier25;
  /** The merchant details associated to this payout. */
  merchant?: Merchant1;
  /** The ID of the merchant account this payout was created for. */
  merchantAccountId?: MerchantAccountId1;
  /** The payment method used for this payout. */
  paymentMethod: TransactionPaymentMethod2;
  /** The payment service used for this payout. */
  paymentService: PayoutPaymentService1;
  /** The ID of the payout in the underlying payment service. */
  paymentServicePayoutId?: PaymentServicePayoutId;
  /** The status of the payout. */
  status: PayoutStatus1;
  /** The date this payout was last updated at. */
  updatedAt: Date;
};

export const payoutSummarySchema: Schema<PayoutSummary> = s.object<PayoutSummary>({
  type: s.defaulted(type60Schema, Type60.Payout),
  id: s.optional(s.lazy(() => id9Schema)),
  amount: s.int(),
  buyer: s.optional(s.lazy(() => buyer17Schema)),
  category: s.optional(s.lazy(() => categorySchema)),
  createdAt: s.dateTime(),
  currency: s.string(),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier25Schema)),
  merchant: s.optional(s.lazy(() => merchant1Schema)),
  merchantAccountId: s.optional(s.lazy(() => merchantAccountId1Schema)),
  paymentMethod: transactionPaymentMethod2Schema,
  paymentService: payoutPaymentService1Schema,
  paymentServicePayoutId: s.optional(s.lazy(() => paymentServicePayoutIdSchema)),
  status: payoutStatus1Schema,
  updatedAt: s.dateTime(),
  _keysMap: {
    createdAt: "created_at",
    externalIdentifier: "external_identifier",
    merchantAccountId: "merchant_account_id",
    paymentMethod: "payment_method",
    paymentService: "payment_service",
    paymentServicePayoutId: "payment_service_payout_id",
    updatedAt: "updated_at",
  },
});
