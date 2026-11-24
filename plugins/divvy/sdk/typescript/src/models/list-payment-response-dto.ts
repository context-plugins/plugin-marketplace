import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentResponseDtoSchema, type PaymentResponseDto } from "./payment-response-dto.js";

/** Get list of payments response. */
export type ListPaymentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: PaymentResponseDto[];
  /** Total number of payments matching the list request, across all pages of results. */
  count?: number;
  /**
   * Sum of the amounts of all payments matching the list request, across all pages of results. This
   * value is in the organization's base currency.
   */
  totalAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPaymentResponseDtoSchema: Schema<ListPaymentResponseDto> = s.object<ListPaymentResponseDto>(
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => paymentResponseDtoSchema))),
    count: s.optional(s.int()),
    totalAmount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
