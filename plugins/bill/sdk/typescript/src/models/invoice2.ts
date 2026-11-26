import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Invoice2 = {
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  invoiceNumber?: string;
  /** Date when the invoice is sent. This value is in the `yyyy-MM-dd` format. */
  invoiceDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoice2Properties: s.Shape<Invoice2> = {
  invoiceNumber: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
};

export const invoice2InternalSchema: Schema<Invoice2> = s.object<Invoice2>(invoice2Properties, {
  additionalProperties: s.json(),
});

export const invoice2Schema: Schema<Invoice2> = s.lazySchema(() =>
  s.object<Invoice2>(
    {
      ...invoice2Properties,
      invoiceNumber: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
