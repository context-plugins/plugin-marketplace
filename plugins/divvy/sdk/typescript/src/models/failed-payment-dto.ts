import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Failed payment DTO. */
export type FailedPaymentDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId?: string;
  /** Failed payment error code */
  errorCode?: string;
  /** Failed payment error message */
  errorMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedPaymentDtoSchema: Schema<FailedPaymentDto> = s.object<FailedPaymentDto>(
  {
    billId: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
