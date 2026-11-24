import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentVendorCreditResponseDtoSchema,
  type PaymentVendorCreditResponseDto,
} from "./payment-vendor-credit-response-dto.js";

/** Record bill pay response dto. */
export type RecordBillPayResponseDto = {
  /** BILL-generated ID of the bill payment. The value begins with `blp`. */
  id?: string;
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId?: string;
  /** Payment amount */
  amount?: number;
  /** Vendor credits applied to the bill payment */
  vendorCredits?: PaymentVendorCreditResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordBillPayResponseDtoSchema: Schema<RecordBillPayResponseDto> =
  s.object<RecordBillPayResponseDto>(
    {
      id: s.optional(s.string()),
      billId: s.optional(s.string()),
      amount: s.optional(s.float64()),
      vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
