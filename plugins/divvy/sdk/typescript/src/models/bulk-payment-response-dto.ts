import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentResponseDtoSchema, type PaymentResponseDto } from "./payment-response-dto.js";

/** Bulk payments response. */
export type BulkPaymentResponseDto = {
  /** List of payments */
  payments?: PaymentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkPaymentResponseDtoSchema: Schema<BulkPaymentResponseDto> = s.object<BulkPaymentResponseDto>(
  {
    payments: s.optional(s.array(s.lazy(() => paymentResponseDtoSchema))),
  },
  { additionalProperties: s.json() },
);
