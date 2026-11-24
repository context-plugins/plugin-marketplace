import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1InvoicegeneratorRequest = {
  /** The invoice number */
  invoiceNumber: string;
  /** The invoice date (YYYY-MM-DD format) */
  date?: string;
  /** The name of the person or company issuing the invoice */
  fromName: string;
  /** The street address of the person or company issuing the invoice */
  fromStreet: string;
  /** The city of the person or company issuing the invoice */
  fromCity: string;
  /** The state of the person or company issuing the invoice */
  fromState: string;
  /** The zip code of the person or company issuing the invoice */
  fromZip: string;
  /** The name of the person or company being invoiced */
  toName: string;
  /** The street address of the person or company being invoiced */
  toStreet: string;
  /** The city of the person or company being invoiced */
  toCity: string;
  /** The state of the person or company being invoiced */
  toState: string;
  /** The zip code of the person or company being invoiced */
  toZip: string;
  /** The job or project associated with the invoice */
  job?: string;
  /** The payment terms for the invoice */
  paymentTerms?: string;
  /** The due date for the invoice (YYYY-MM-DD format) */
  dueDate?: string;
  /** The discount to be applied to the invoice */
  discount?: number;
  /**
   * The sales tax rate for the invoice as a percentage, applied to the subtotal after discount
   * (e.g. 7.5 for 7.5%)
   */
  salesTax?: number;
  /**
   * Public http(s) URL of an image to use as the invoice logo (max 2 MB, fetched with a 5 second
   * timeout; a placeholder logo is used if it can't be loaded)
   */
  logoUrl?: string;
  /** The currency for the invoice */
  currency?: string;
  /** The items being invoiced (qty, description, unit_price) */
  items: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1InvoicegeneratorRequestSchema: Schema<V1InvoicegeneratorRequest> =
  s.object<V1InvoicegeneratorRequest>(
    {
      invoiceNumber: s.string(),
      date: s.optional(s.string()),
      fromName: s.string(),
      fromStreet: s.string(),
      fromCity: s.string(),
      fromState: s.string(),
      fromZip: s.string(),
      toName: s.string(),
      toStreet: s.string(),
      toCity: s.string(),
      toState: s.string(),
      toZip: s.string(),
      job: s.optional(s.string()),
      paymentTerms: s.optional(s.string()),
      dueDate: s.optional(s.string()),
      discount: s.optional(s.float64()),
      salesTax: s.optional(s.float64()),
      logoUrl: s.optional(s.string()),
      currency: s.optional(s.string()),
      items: s.string(),
      _keysMap: {
        fromName: "from_name",
        fromStreet: "from_street",
        fromCity: "from_city",
        fromState: "from_state",
        fromZip: "from_zip",
        toName: "to_name",
        toStreet: "to_street",
        toCity: "to_city",
        toState: "to_state",
        toZip: "to_zip",
        logoUrl: "logoURL",
      },
    },
    { additionalProperties: s.json() },
  );
