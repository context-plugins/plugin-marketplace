import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingOptions2Schema, type FundingOptions2 } from "./funding-options2.js";

/** Payments options response dto. */
export type PaymentOptionsResponseDto = {
  /** BILL-generated ID of the vendor to be paid. The value begins with `009`. */
  vendorId: string;
  /** Vendor payment amount */
  amount: number;
  fundingOptions?: FundingOptions2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentOptionsResponseDtoSchema: Schema<PaymentOptionsResponseDto> =
  s.object<PaymentOptionsResponseDto>(
    {
      vendorId: s.string(),
      amount: s.float64(),
      fundingOptions: s.optional(s.lazy(() => fundingOptions2Schema)),
    },
    { additionalProperties: s.json() },
  );
