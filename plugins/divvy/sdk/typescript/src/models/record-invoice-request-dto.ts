import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  invoicePaymentTypeRequestSchema,
  type InvoicePaymentTypeRequest,
} from "./invoice-payment-type-request.js";
import {
  recordInvoiceItemRequestDtoInternalSchema,
  recordInvoiceItemRequestDtoSchema,
  type RecordInvoiceItemRequestDto,
} from "./record-invoice-item-request-dto.js";

/** Record AR payment */
export type RecordInvoiceRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** Invoice payment date. The value is in the `yyyy-MM-dd` format. */
  paymentDate: string;
  paymentType: InvoicePaymentTypeRequest;
  /** Payment amount */
  amount: number;
  /** Payment description */
  description?: string;
  /** List of invoice payments */
  invoices: RecordInvoiceItemRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recordInvoiceRequestDtoProperties: s.Shape<RecordInvoiceRequestDto> = {
  customerId: s.optional(s.string()),
  paymentDate: s.dateOnly(),
  paymentType: invoicePaymentTypeRequestSchema,
  amount: s.float64(),
  description: s.optional(s.string()),
  invoices: s.array(s.lazy(() => recordInvoiceItemRequestDtoInternalSchema)),
};

export const recordInvoiceRequestDtoInternalSchema: Schema<RecordInvoiceRequestDto> =
  s.object<RecordInvoiceRequestDto>(recordInvoiceRequestDtoProperties, { additionalProperties: s.json() });

export const recordInvoiceRequestDtoSchema: Schema<RecordInvoiceRequestDto> = s.lazySchema(() =>
  s.object<RecordInvoiceRequestDto>(
    {
      ...recordInvoiceRequestDtoProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
      invoices: s.array(s.lazy(() => recordInvoiceItemRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
