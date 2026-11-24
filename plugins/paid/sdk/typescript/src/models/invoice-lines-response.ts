import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoiceLineSchema, type InvoiceLine } from "./invoice-line.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type InvoiceLinesResponse = {
  data: InvoiceLine[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceLinesResponseSchema: Schema<InvoiceLinesResponse> = s.object<InvoiceLinesResponse>(
  {
    data: s.array(s.lazy(() => invoiceLineSchema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
