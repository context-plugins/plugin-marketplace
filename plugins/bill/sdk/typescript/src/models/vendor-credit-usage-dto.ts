import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** VendorCredit usage Dto. */
export type VendorCreditUsageDto = {
  /** BILL-generated ID of the bill to which the vendor credit is applied */
  billId?: string;
  /** BILL-generated ID of the payment to which the vendor credit is applied */
  paymentId?: string;
  /** Vendor credit amount applied */
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vendorCreditUsageDtoSchema: Schema<VendorCreditUsageDto> = s.object<VendorCreditUsageDto>(
  {
    billId: s.optional(s.string()),
    paymentId: s.optional(s.string()),
    amount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
