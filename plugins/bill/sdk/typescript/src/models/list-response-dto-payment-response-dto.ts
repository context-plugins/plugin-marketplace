import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentResponseDtoSchema, type PaymentResponseDto } from "./payment-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoPaymentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: PaymentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoPaymentResponseDtoSchema: Schema<ListResponseDtoPaymentResponseDto> =
  s.object<ListResponseDtoPaymentResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => paymentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
