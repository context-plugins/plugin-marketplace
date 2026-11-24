import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Common payment information POJO. */
export type PaymentInformationCommon = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentInformationCommonProperties: s.Shape<PaymentInformationCommon> = {
  payeeName: s.string(),
  email: s.optional(s.string()),
};

export const paymentInformationCommonInternalSchema: Schema<PaymentInformationCommon> =
  s.object<PaymentInformationCommon>(paymentInformationCommonProperties, { additionalProperties: s.json() });

export const paymentInformationCommonSchema: Schema<PaymentInformationCommon> = s.lazySchema(() =>
  s.object<PaymentInformationCommon>(
    {
      ...paymentInformationCommonProperties,
      payeeName: s.string().check(s.pattern("^.{3,100}$")),
    },
    { additionalProperties: s.json() },
  ),
);
