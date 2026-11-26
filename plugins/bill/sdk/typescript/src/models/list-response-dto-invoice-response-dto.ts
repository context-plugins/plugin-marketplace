import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoiceResponseDtoSchema, type InvoiceResponseDto } from "./invoice-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoInvoiceResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: InvoiceResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoInvoiceResponseDtoSchema: Schema<ListResponseDtoInvoiceResponseDto> =
  s.object<ListResponseDtoInvoiceResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => invoiceResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
