import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccount1InternalSchema, bankAccount1Schema, type BankAccount1 } from "./bank-account1.js";
import { disbursementSubTypeSchema, type DisbursementSubType } from "./disbursement-sub-type.js";
import { payByTypeSchema, type PayByType } from "./pay-by-type.js";
import { paymentPurpose3Schema, type PaymentPurpose3 } from "./payment-purpose3.js";
import { transferMethodSchema, type TransferMethod } from "./transfer-method.js";
import { virtualCard1Schema, type VirtualCard1 } from "./virtual-card1.js";

/** The type PaymentInformationResponse. */
export type PaymentInformationResponse = {
  /**
   * Vendor name for check and electronic payments. This field is overridden when you connect with a
   * vendor in the BILL network.
   */
  payeeName: string;
  /**
   * Vendor email address for receiving payment information. BILL uses the vendor `email` value when
   * this payment `email` value is not set.
   */
  email?: string;
  /** Last payment date */
  lastPaymentDate?: string;
  payByType?: PayByType;
  payBySubType?: DisbursementSubType;
  transferMethod?: TransferMethod;
  virtualCard?: VirtualCard1;
  bankAccount?: BankAccount1;
  paymentPurpose?: PaymentPurpose3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentInformationResponseProperties: s.Shape<PaymentInformationResponse> = {
  payeeName: s.string(),
  email: s.optional(s.string()),
  lastPaymentDate: s.optional(s.string()),
  payByType: s.optional(s.lazy(() => payByTypeSchema)),
  payBySubType: s.optional(s.lazy(() => disbursementSubTypeSchema)),
  transferMethod: s.optional(s.lazy(() => transferMethodSchema)),
  virtualCard: s.optional(s.lazy(() => virtualCard1Schema)),
  bankAccount: s.optional(s.lazy(() => bankAccount1InternalSchema)),
  paymentPurpose: s.optional(s.lazy(() => paymentPurpose3Schema)),
};

export const paymentInformationResponseInternalSchema: Schema<PaymentInformationResponse> =
  s.object<PaymentInformationResponse>(paymentInformationResponseProperties, {
    additionalProperties: s.json(),
  });

export const paymentInformationResponseSchema: Schema<PaymentInformationResponse> = s.lazySchema(() =>
  s.object<PaymentInformationResponse>(
    {
      ...paymentInformationResponseProperties,
      payeeName: s.string().check(s.pattern("^.{3,100}$")),
      bankAccount: s.optional(s.lazy(() => bankAccount1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
