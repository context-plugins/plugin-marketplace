import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Get invoice payment link */
export type InvoicePaymentLinkRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId: string;
  /**
   * Recipient email address.
   *
   * When a customer payment is made with the invoice payment link, BILL sends a payment receipt to
   * the provided email address.
   */
  email: string;
  /** Redirect URL after the customer payment is complete */
  returnUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoicePaymentLinkRequestDtoProperties: s.Shape<InvoicePaymentLinkRequestDto> = {
  customerId: s.string(),
  email: s.string(),
  returnUrl: s.optional(s.string()),
};

export const invoicePaymentLinkRequestDtoInternalSchema: Schema<InvoicePaymentLinkRequestDto> =
  s.object<InvoicePaymentLinkRequestDto>(invoicePaymentLinkRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const invoicePaymentLinkRequestDtoSchema: Schema<InvoicePaymentLinkRequestDto> = s.lazySchema(() =>
  s.object<InvoicePaymentLinkRequestDto>(
    {
      ...invoicePaymentLinkRequestDtoProperties,
      customerId: s.string().check(s.minLength(1)),
      email: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
