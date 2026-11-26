import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payment vendor credit request DTO. */
export type PaymentVendorCreditRequestDto = {
  /**
   * BILL-generated ID of the vendor credit applied to the bill payment. The value begins with
   * `vcr`.
   */
  id: string;
  /** Credit amount */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentVendorCreditRequestDtoProperties: s.Shape<PaymentVendorCreditRequestDto> = {
  id: s.string(),
  amount: s.float64(),
};

export const paymentVendorCreditRequestDtoInternalSchema: Schema<PaymentVendorCreditRequestDto> =
  s.object<PaymentVendorCreditRequestDto>(paymentVendorCreditRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const paymentVendorCreditRequestDtoSchema: Schema<PaymentVendorCreditRequestDto> = s.lazySchema(() =>
  s.object<PaymentVendorCreditRequestDto>(
    {
      ...paymentVendorCreditRequestDtoProperties,
      id: s.string().check(s.minLength(1)),
      amount: s.float64().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
