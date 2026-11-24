import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice Payment Link Response Dto. */
export type InvoicePaymentLinkResponseDto = {
  /** Invoice payment link */
  paymentLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePaymentLinkResponseDtoSchema: Schema<InvoicePaymentLinkResponseDto> =
  s.object<InvoicePaymentLinkResponseDto>(
    {
      paymentLink: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
