import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mass payment response DTO. */
export type MassPaymentResponseDto = {
  /** BILL-generated ID of the mass payment batch. The value begins with `bbq`. */
  paymentBatchId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const massPaymentResponseDtoSchema: Schema<MassPaymentResponseDto> = s.object<MassPaymentResponseDto>(
  {
    paymentBatchId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
