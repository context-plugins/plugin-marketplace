import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSalesInvoiceResponseSchema,
  type ListSalesInvoiceResponse,
} from "./list-sales-invoice-response.js";

export type Embedded37 = {
  /**
   * An array of sales invoice objects. For a complete reference of the sales invoice object, refer
   * to the [Get sales invoice endpoint](get-sales-invoice) documentation.
   */
  invoices?: ListSalesInvoiceResponse[];
};

export const embedded37Schema: Schema<Embedded37> = s.object<Embedded37>({
  invoices: s.optional(s.array(s.lazy(() => listSalesInvoiceResponseSchema))),
});
