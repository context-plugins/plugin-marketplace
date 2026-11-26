import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  purchaseInvoiceInternalSchema,
  purchaseInvoiceSchema,
  type PurchaseInvoice,
} from "./purchase-invoice.js";

export type CompaniesApiPurchaseInvoicesResponse = {
  value?: PurchaseInvoice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiPurchaseInvoicesResponseProperties: s.Shape<CompaniesApiPurchaseInvoicesResponse> = {
  value: s.optional(s.array(s.lazy(() => purchaseInvoiceInternalSchema))),
};

export const companiesApiPurchaseInvoicesResponseInternalSchema: Schema<CompaniesApiPurchaseInvoicesResponse> =
  s.object<CompaniesApiPurchaseInvoicesResponse>(companiesApiPurchaseInvoicesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiPurchaseInvoicesResponseSchema: Schema<CompaniesApiPurchaseInvoicesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiPurchaseInvoicesResponse>(
      {
        ...companiesApiPurchaseInvoicesResponseProperties,
        value: s.optional(s.array(s.lazy(() => purchaseInvoiceSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
