import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentPurpose1BillV3VendorsApiInternalSchema,
  paymentPurpose1BillV3VendorsApiSchema,
  type PaymentPurpose1BillV3VendorsApi,
} from "./payment-purpose1-bill-v3-vendors-api.js";

export type PaymentInformationBillV3VendorsApi = {
  /** Vendor name for check and electronic payments */
  payeeName?: string;
  /**
   * Vendor email address for receiving payment information. BILL uses the vendor `email` value when
   * this payment `email` value is not set.
   */
  email?: string;
  paymentPurpose?: PaymentPurpose1BillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentInformationBillV3VendorsApiProperties: s.Shape<PaymentInformationBillV3VendorsApi> = {
  payeeName: s.optional(s.string()),
  email: s.optional(s.string()),
  paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiInternalSchema)),
};

export const paymentInformationBillV3VendorsApiInternalSchema: Schema<PaymentInformationBillV3VendorsApi> =
  s.object<PaymentInformationBillV3VendorsApi>(paymentInformationBillV3VendorsApiProperties, {
    additionalProperties: s.json(),
  });

export const paymentInformationBillV3VendorsApiSchema: Schema<PaymentInformationBillV3VendorsApi> =
  s.lazySchema(() =>
    s.object<PaymentInformationBillV3VendorsApi>(
      {
        ...paymentInformationBillV3VendorsApiProperties,
        paymentPurpose: s.optional(s.lazy(() => paymentPurpose1BillV3VendorsApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
