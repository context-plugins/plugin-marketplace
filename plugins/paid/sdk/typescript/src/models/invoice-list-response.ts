import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type InvoiceListResponse = {
  data: Invoice[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceListResponseSchema: Schema<InvoiceListResponse> = s.object<InvoiceListResponse>(
  {
    data: s.array(s.lazy(() => invoiceSchema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
