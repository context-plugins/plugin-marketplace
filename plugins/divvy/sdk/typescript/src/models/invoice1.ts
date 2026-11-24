import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Invoice1 = {
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  invoiceNumber: string;
  /** Date when the invoice is sent. This value is in the `yyyy-MM-dd` format. */
  invoiceDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoice1Properties: s.Shape<Invoice1> = {
  invoiceNumber: s.string(),
  invoiceDate: s.dateOnly(),
};

export const invoice1InternalSchema: Schema<Invoice1> = s.object<Invoice1>(invoice1Properties, {
  additionalProperties: s.json(),
});

export const invoice1Schema: Schema<Invoice1> = s.lazySchema(() =>
  s.object<Invoice1>(
    {
      ...invoice1Properties,
      invoiceNumber: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
