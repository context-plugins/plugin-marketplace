import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesInvoiceInternalSchema, salesInvoiceSchema, type SalesInvoice } from "./sales-invoice.js";

export type CompaniesApiSalesInvoicesResponse = {
  value?: SalesInvoice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiSalesInvoicesResponseProperties: s.Shape<CompaniesApiSalesInvoicesResponse> = {
  value: s.optional(s.array(s.lazy(() => salesInvoiceInternalSchema))),
};

export const companiesApiSalesInvoicesResponseInternalSchema: Schema<CompaniesApiSalesInvoicesResponse> =
  s.object<CompaniesApiSalesInvoicesResponse>(companiesApiSalesInvoicesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiSalesInvoicesResponseSchema: Schema<CompaniesApiSalesInvoicesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiSalesInvoicesResponse>(
      {
        ...companiesApiSalesInvoicesResponseProperties,
        value: s.optional(s.array(s.lazy(() => salesInvoiceSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
