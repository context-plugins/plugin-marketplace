import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice information. */
export type InvoiceConnectEventsSubscriptionsApi = {
  invoiceNumber?: string;
  invoiceDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceConnectEventsSubscriptionsApiSchema: Schema<InvoiceConnectEventsSubscriptionsApi> =
  s.object<InvoiceConnectEventsSubscriptionsApi>(
    {
      invoiceNumber: s.optional(s.string()),
      invoiceDate: s.optional(s.dateOnly()),
    },
    { additionalProperties: s.json() },
  );
