import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice linked to a bill. */
export type BillUpdateInvoiceRequestDto = {
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  invoiceNumber?: string;
  /** Date when the invoice is sent. This value is in the `yyyy-MM-dd` format. */
  invoiceDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billUpdateInvoiceRequestDtoProperties: s.Shape<BillUpdateInvoiceRequestDto> = {
  invoiceNumber: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
};

export const billUpdateInvoiceRequestDtoInternalSchema: Schema<BillUpdateInvoiceRequestDto> =
  s.object<BillUpdateInvoiceRequestDto>(billUpdateInvoiceRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const billUpdateInvoiceRequestDtoSchema: Schema<BillUpdateInvoiceRequestDto> = s.lazySchema(() =>
  s.object<BillUpdateInvoiceRequestDto>(
    {
      ...billUpdateInvoiceRequestDtoProperties,
      invoiceNumber: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
