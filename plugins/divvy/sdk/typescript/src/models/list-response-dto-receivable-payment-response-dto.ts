import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  receivablePaymentResponseDtoSchema,
  type ReceivablePaymentResponseDto,
} from "./receivable-payment-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoReceivablePaymentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ReceivablePaymentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoReceivablePaymentResponseDtoSchema: Schema<ListResponseDtoReceivablePaymentResponseDto> =
  s.object<ListResponseDtoReceivablePaymentResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => receivablePaymentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
