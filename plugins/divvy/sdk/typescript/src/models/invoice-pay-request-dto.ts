import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice Payment request. */
export type InvoicePayRequestDto = {
  /** BILL-generated ID of the invoice. The value begins with `00e`. */
  invoiceId: string;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePayRequestDtoSchema: Schema<InvoicePayRequestDto> = s.object<InvoicePayRequestDto>(
  {
    invoiceId: s.string(),
    amount: s.float64(),
  },
  { additionalProperties: s.json() },
);
