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

export type PaymentInformation2 = {
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

const paymentInformation2Properties: s.Shape<PaymentInformation2> = {
  payeeName: s.string(),
  email: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountBillV3VendorsApiInternalSchema)),
  paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiInternalSchema)),
};

export const paymentInformation2InternalSchema: Schema<PaymentInformation2> = s.object<PaymentInformation2>(
  paymentInformation2Properties,
  { additionalProperties: s.json() },
);

export const paymentInformation2Schema: Schema<PaymentInformation2> = s.lazySchema(() =>
  s.object<PaymentInformation2>(
    {
      ...paymentInformation2Properties,
      payeeName: s.string().check(s.pattern("^.{3,100}$")),
      bankAccount: s.optional(s.lazy(() => bankAccountBillV3VendorsApiSchema)),
      paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
