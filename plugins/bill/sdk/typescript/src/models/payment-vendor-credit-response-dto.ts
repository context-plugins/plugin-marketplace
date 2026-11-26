import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payment vendor credit response DTO. */
export type PaymentVendorCreditResponseDto = {
  /**
   * BILL-generated ID of the vendor credit applied to the bill payment. The value begins with
   * `vcr`.
   */
  id?: string;
  /** Credit amount */
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentVendorCreditResponseDtoSchema: Schema<PaymentVendorCreditResponseDto> =
  s.object<PaymentVendorCreditResponseDto>(
    {
      id: s.optional(s.string()),
      amount: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
