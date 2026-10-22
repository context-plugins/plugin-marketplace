import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityInvoiceSchema, type ListEntityInvoice } from "./list-entity-invoice.js";

export type Embedded8 = {
  /**
   * An array of invoice objects. For a complete reference of the invoice object, refer to the [Get
   * invoice endpoint](get-invoice) documentation.
   */
  invoices: ListEntityInvoice[];
};

export const embedded8Schema: Schema<Embedded8> = s.object<Embedded8>({
  invoices: s.array(s.lazy(() => listEntityInvoiceSchema)),
});
