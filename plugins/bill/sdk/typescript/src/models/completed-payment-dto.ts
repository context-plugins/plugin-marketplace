import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Completed payment DTO. */
export type CompletedPaymentDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId?: string;
  /** BILL-generated ID of the payment. The value begins with `stp`. */
  paymentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completedPaymentDtoSchema: Schema<CompletedPaymentDto> = s.object<CompletedPaymentDto>(
  {
    billId: s.optional(s.string()),
    paymentId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
