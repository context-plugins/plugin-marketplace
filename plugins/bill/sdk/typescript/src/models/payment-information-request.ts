import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bankAccountBillV3VendorsApiInternalSchema,
  bankAccountBillV3VendorsApiSchema,
  type BankAccountBillV3VendorsApi,
} from "./bank-account-bill-v3-vendors-api.js";
import {
  paymentPurpose1BillV3VendorsApiInternalSchema,
  paymentPurpose1BillV3VendorsApiSchema,
  type PaymentPurpose1BillV3VendorsApi,
} from "./payment-purpose1-bill-v3-vendors-api.js";

/** The type Payment information. */
export type PaymentInformationRequest = {
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
  bankAccount?: BankAccountBillV3VendorsApi;
  paymentPurpose?: PaymentPurpose1BillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentInformationRequestProperties: s.Shape<PaymentInformationRequest> = {
  payeeName: s.string(),
  email: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountBillV3VendorsApiInternalSchema)),
  paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiInternalSchema)),
};

export const paymentInformationRequestInternalSchema: Schema<PaymentInformationRequest> =
  s.object<PaymentInformationRequest>(paymentInformationRequestProperties, {
    additionalProperties: s.json(),
  });

export const paymentInformationRequestSchema: Schema<PaymentInformationRequest> = s.lazySchema(() =>
  s.object<PaymentInformationRequest>(
    {
      ...paymentInformationRequestProperties,
      payeeName: s.string().check(s.pattern("^.{3,100}$")),
      bankAccount: s.optional(s.lazy(() => bankAccountBillV3VendorsApiSchema)),
      paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
