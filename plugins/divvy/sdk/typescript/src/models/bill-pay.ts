import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentVendorCreditRequestDtoInternalSchema,
  paymentVendorCreditRequestDtoSchema,
  type PaymentVendorCreditRequestDto,
} from "./payment-vendor-credit-request-dto.js";

/** Bill pays details in Payments API. */
export type BillPay = {
  /** BILL-generated ID of the bill to be paid. The value begins with `00n`. */
  billId: string;
  /** Payment amount */
  amount: number;
  /** Vendor credits applied to the bill payment */
  vendorCredits?: PaymentVendorCreditRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billPayProperties: s.Shape<BillPay> = {
  billId: s.string(),
  amount: s.float64(),
  vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoInternalSchema))),
};

export const billPayInternalSchema: Schema<BillPay> = s.object<BillPay>(billPayProperties, {
  additionalProperties: s.json(),
});

export const billPaySchema: Schema<BillPay> = s.lazySchema(() =>
  s.object<BillPay>(
    {
      ...billPayProperties,
      billId: s.string().check(s.minLength(1)),
      amount: s.float64().check(s.gte(0)),
      vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
