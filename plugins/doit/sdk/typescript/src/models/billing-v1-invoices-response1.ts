import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import { invoicePlatformSchema, type InvoicePlatform } from "./invoice-platform.js";
import { listItemSchema, type ListItem } from "./list-item.js";
import { statusDoiTInvoicesApiSchema, type StatusDoiTInvoicesApi } from "./status-doi-tinvoices-api.js";

export type BillingV1InvoicesResponse1 = {
  /** Invoice number, identifying the invoice. */
  id?: string;
  /** The time when this invoice was issued, in milliseconds since the epoch. */
  invoiceDate?: number;
  /** Platform identifier for invoice source. */
  platform?: InvoicePlatform;
  /** The last day to pay the invoice, in milliseconds since the epoch */
  dueDate?: number;
  /** Status of the invoice */
  status?: StatusDoiTInvoicesApi;
  /** Total invoiced amount */
  totalAmount?: number;
  /** Invoice balance to be paid */
  balanceAmount?: number;
  /** Currency code for monetary values. */
  currency?: Currency;
  /**
   * Link to [invoice details
   * page](https://help.doit.com/docs/billing/invoices-and-payments/managing-invoices) in the DoiT
   * console. You can download the PDF invoice from the invoice details page.
   */
  url?: string;
  /** Invoice line items. */
  lineItems?: ListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingV1InvoicesResponse1Schema: Schema<BillingV1InvoicesResponse1> =
  s.object<BillingV1InvoicesResponse1>(
    {
      id: s.optional(s.string()),
      invoiceDate: s.optional(s.int()),
      platform: s.optional(s.lazy(() => invoicePlatformSchema)),
      dueDate: s.optional(s.int()),
      status: s.optional(s.lazy(() => statusDoiTInvoicesApiSchema)),
      totalAmount: s.optional(s.float64()),
      balanceAmount: s.optional(s.float64()),
      currency: s.optional(s.lazy(() => currencySchema)),
      url: s.optional(s.string()),
      lineItems: s.optional(s.array(s.lazy(() => listItemSchema))),
    },
    { additionalProperties: s.json() },
  );
