import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentTermResponseDtoSchema, type PaymentTermResponseDto } from "./payment-term-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoPaymentTermResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: PaymentTermResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoPaymentTermResponseDtoSchema: Schema<ListResponseDtoPaymentTermResponseDto> =
  s.object<ListResponseDtoPaymentTermResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => paymentTermResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
