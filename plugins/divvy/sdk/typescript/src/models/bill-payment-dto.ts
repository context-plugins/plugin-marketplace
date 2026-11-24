import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single payment applied to a bill. */
export type BillPaymentDto = {
  /** BILL-generated ID of the payment. The value begins with `stp`. */
  id?: string;
  /** Payment amount applied to the bill */
  amount?: number;
  /** Date the payment was processed. The value is in the `yyyy-MM-dd` format. */
  processDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billPaymentDtoSchema: Schema<BillPaymentDto> = s.object<BillPaymentDto>(
  {
    id: s.optional(s.string()),
    amount: s.optional(s.float64()),
    processDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
