import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice linked to a bill. */
export type Invoice = {
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  invoiceNumber: string;
  /** Date when the invoice is sent. This value is in the `yyyy-MM-dd` format. */
  invoiceDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceProperties: s.Shape<Invoice> = {
  invoiceNumber: s.string(),
  invoiceDate: s.dateOnly(),
};

export const invoiceInternalSchema: Schema<Invoice> = s.object<Invoice>(invoiceProperties, {
  additionalProperties: s.json(),
});

export const invoiceSchema: Schema<Invoice> = s.lazySchema(() =>
  s.object<Invoice>(
    {
      ...invoiceProperties,
      invoiceNumber: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
