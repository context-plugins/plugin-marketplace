import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Record invoice item dto. */
export type RecordInvoiceItemRequestDto = {
  /** BILL-generated ID of the invoice. The value begins with `00e`. */
  id: string;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   *
   * **Note**: You cannot overpay an invoice.
   */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recordInvoiceItemRequestDtoProperties: s.Shape<RecordInvoiceItemRequestDto> = {
  id: s.string(),
  amount: s.float64(),
};

export const recordInvoiceItemRequestDtoInternalSchema: Schema<RecordInvoiceItemRequestDto> =
  s.object<RecordInvoiceItemRequestDto>(recordInvoiceItemRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const recordInvoiceItemRequestDtoSchema: Schema<RecordInvoiceItemRequestDto> = s.lazySchema(() =>
  s.object<RecordInvoiceItemRequestDto>(
    {
      ...recordInvoiceItemRequestDtoProperties,
      id: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
