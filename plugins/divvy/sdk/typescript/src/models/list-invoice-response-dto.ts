import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoiceResponseDtoSchema, type InvoiceResponseDto } from "./invoice-response-dto.js";

/** Get list of invoices response. */
export type ListInvoiceResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: InvoiceResponseDto[];
  /** Total number of invoices matching the list request filters, across all pages of results. */
  count?: number;
  /**
   * Sum of the balance due of all invoices matching the list request filters, across all pages of
   * results. This value is in the organization's base currency. For invoices issued in a foreign
   * currency, the invoice's exchange rate is applied.
   */
  totalDueAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listInvoiceResponseDtoSchema: Schema<ListInvoiceResponseDto> = s.object<ListInvoiceResponseDto>(
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => invoiceResponseDtoSchema))),
    count: s.optional(s.int()),
    totalDueAmount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
