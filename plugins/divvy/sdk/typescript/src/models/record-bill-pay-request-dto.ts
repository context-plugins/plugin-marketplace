import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentVendorCreditRequestDtoInternalSchema,
  paymentVendorCreditRequestDtoSchema,
  type PaymentVendorCreditRequestDto,
} from "./payment-vendor-credit-request-dto.js";

/** Record bill pay request dto. */
export type RecordBillPayRequestDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId: string;
  /** Payment amount */
  amount: number;
  /** Vendor credits applied to the bill payment */
  vendorCredits?: PaymentVendorCreditRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recordBillPayRequestDtoProperties: s.Shape<RecordBillPayRequestDto> = {
  billId: s.string(),
  amount: s.float64(),
  vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoInternalSchema))),
};

export const recordBillPayRequestDtoInternalSchema: Schema<RecordBillPayRequestDto> =
  s.object<RecordBillPayRequestDto>(recordBillPayRequestDtoProperties, { additionalProperties: s.json() });

export const recordBillPayRequestDtoSchema: Schema<RecordBillPayRequestDto> = s.lazySchema(() =>
  s.object<RecordBillPayRequestDto>(
    {
      ...recordBillPayRequestDtoProperties,
      billId: s.string().check(s.minLength(1)),
      vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
