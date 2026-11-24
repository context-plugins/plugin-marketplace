import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoiceListItemSchema, type InvoiceListItem } from "./invoice-list-item.js";

export type BillingV1InvoicesResponse = {
  /** Array of Invoices */
  invoices?: InvoiceListItem[];
  /** Page token. Can be used to request the next page of results. */
  pageToken?: string;
  /** Invoice rows count */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingV1InvoicesResponseSchema: Schema<BillingV1InvoicesResponse> =
  s.object<BillingV1InvoicesResponse>(
    {
      invoices: s.optional(s.array(s.lazy(() => invoiceListItemSchema))),
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
