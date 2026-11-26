import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  invoicePaymentTypeResponseSchema,
  type InvoicePaymentTypeResponse,
} from "./invoice-payment-type-response.js";
import {
  recordInvoiceItemResponseDtoSchema,
  type RecordInvoiceItemResponseDto,
} from "./record-invoice-item-response-dto.js";
import {
  recordInvoicePaymentStatusSchema,
  type RecordInvoicePaymentStatus,
} from "./record-invoice-payment-status.js";

/** Record AR payment response. */
export type RecordInvoiceResponseDto = {
  /** BILL-generated ID of the received payment. The value begins with `0rp`. */
  id?: string;
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** Record AR payment type. */
  paymentType?: InvoicePaymentTypeResponse;
  /** Invoice payment date. The value is in the `yyyy-MM-dd` format. */
  paymentDate?: string;
  /** Payment amount */
  amount?: number;
  /** Unapplied payment amount */
  unappliedAmount?: number;
  status?: RecordInvoicePaymentStatus;
  /** Payment description */
  description?: string;
  /** List of invoice payments */
  invoices?: RecordInvoiceItemResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordInvoiceResponseDtoSchema: Schema<RecordInvoiceResponseDto> =
  s.object<RecordInvoiceResponseDto>(
    {
      id: s.optional(s.string()),
      customerId: s.optional(s.string()),
      paymentType: s.optional(s.lazy(() => invoicePaymentTypeResponseSchema)),
      paymentDate: s.optional(s.dateOnly()),
      amount: s.optional(s.float64()),
      unappliedAmount: s.optional(s.float64()),
      status: s.optional(s.lazy(() => recordInvoicePaymentStatusSchema)),
      description: s.optional(s.string()),
      invoices: s.optional(s.array(s.lazy(() => recordInvoiceItemResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
