import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grossAmountSchema, type GrossAmount } from "./gross-amount.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";
import { line2Schema, type Line2 } from "./line2.js";
import { links12Schema, type Links12 } from "./links12.js";
import { netAmountSchema, type NetAmount } from "./net-amount.js";
import { vatAmountSchema, type VatAmount } from "./vat-amount.js";

export type EntityInvoice = {
  /**
   * Indicates that the response contains an invoice object. Will always contain the string
   * `invoice` for this endpoint.
   */
  resource: string;
  id: string;
  /** The reference number of the invoice. An example value would be: `2024.10000`. */
  reference: string;
  /** The VAT number to which the invoice was issued to, if applicable. */
  vatNumber: string | null;
  status: InvoiceStatus;
  netAmount: NetAmount;
  vatAmount: VatAmount;
  grossAmount: GrossAmount;
  /** The collection of products which make up the invoice. */
  lines: Line2[];
  /** The invoice date in `YYYY-MM-DD` format. */
  issuedAt: string;
  /** The date on which the invoice was paid, if applicable, in `YYYY-MM-DD` format. */
  paidAt?: string | null;
  /** The date on which the invoice is due, if applicable, in `YYYY-MM-DD` format. */
  dueAt?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links12;
};

export const entityInvoiceSchema: Schema<EntityInvoice> = s.object<EntityInvoice>({
  resource: s.string(),
  id: s.string(),
  reference: s.string(),
  vatNumber: s.nullable(s.string()),
  status: invoiceStatusSchema,
  netAmount: netAmountSchema,
  vatAmount: vatAmountSchema,
  grossAmount: grossAmountSchema,
  lines: s.array(s.lazy(() => line2Schema)),
  issuedAt: s.string(),
  paidAt: s.optionalNullable(s.string()),
  dueAt: s.optionalNullable(s.string()),
  links: links12Schema,
  _keysMap: {
    links: "_links",
  },
});
