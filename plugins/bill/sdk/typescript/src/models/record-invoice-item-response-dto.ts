import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoicePaymentSchema, type InvoicePayment } from "./invoice-payment.js";

/** Record invoice details response. */
export type RecordInvoiceItemResponseDto = {
  /** BILL-generated ID of the invoice. The value begins with `00e`. */
  id?: string;
  /** Invoice payments */
  payments?: InvoicePayment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordInvoiceItemResponseDtoSchema: Schema<RecordInvoiceItemResponseDto> =
  s.object<RecordInvoiceItemResponseDto>(
    {
      id: s.optional(s.string()),
      payments: s.optional(s.array(s.lazy(() => invoicePaymentSchema))),
    },
    { additionalProperties: s.json() },
  );
