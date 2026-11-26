import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringInvoiceResponseDtoSchema,
  type RecurringInvoiceResponseDto,
} from "./recurring-invoice-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoRecurringInvoiceResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: RecurringInvoiceResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoRecurringInvoiceResponseDtoSchema: Schema<ListResponseDtoRecurringInvoiceResponseDto> =
  s.object<ListResponseDtoRecurringInvoiceResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => recurringInvoiceResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
