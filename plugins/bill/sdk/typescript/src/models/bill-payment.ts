import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentVendorCreditResponseDtoSchema,
  type PaymentVendorCreditResponseDto,
} from "./payment-vendor-credit-response-dto.js";

/** Details of bill payment. */
export type BillPayment = {
  /** BILL-generated ID of the bill payment. The value begins with `blp`. */
  id?: string;
  /** BILL-generated ID of the bill to be paid. The value begins with `00n`. */
  billId?: string;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   */
  amount?: number;
  /** Vendor credits applied to the bill payment */
  vendorCredits?: PaymentVendorCreditResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billPaymentSchema: Schema<BillPayment> = s.object<BillPayment>(
  {
    id: s.optional(s.string()),
    billId: s.optional(s.string()),
    amount: s.optional(s.float64()),
    vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditResponseDtoSchema))),
  },
  { additionalProperties: s.json() },
);
