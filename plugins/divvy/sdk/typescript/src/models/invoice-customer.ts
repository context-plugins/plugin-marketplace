import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Customer info for an invoice. */
export type InvoiceCustomer = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  id?: string;
  /** Customer name */
  name?: string;
  /** Customer email address */
  email?: string;
  invoiceCurrency?: CurrencyCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceCustomerProperties: s.Shape<InvoiceCustomer> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  invoiceCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
};

export const invoiceCustomerInternalSchema: Schema<InvoiceCustomer> = s.object<InvoiceCustomer>(
  invoiceCustomerProperties,
  { additionalProperties: s.json() },
);

export const invoiceCustomerSchema: Schema<InvoiceCustomer> = s.lazySchema(() =>
  s.object<InvoiceCustomer>(
    {
      ...invoiceCustomerProperties,
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
