import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesOrderInternalSchema, salesOrderSchema, type SalesOrder } from "./sales-order.js";

export type CompaniesApiSalesOrdersResponse = {
  value?: SalesOrder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiSalesOrdersResponseProperties: s.Shape<CompaniesApiSalesOrdersResponse> = {
  value: s.optional(s.array(s.lazy(() => salesOrderInternalSchema))),
};

export const companiesApiSalesOrdersResponseInternalSchema: Schema<CompaniesApiSalesOrdersResponse> =
  s.object<CompaniesApiSalesOrdersResponse>(companiesApiSalesOrdersResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiSalesOrdersResponseSchema: Schema<CompaniesApiSalesOrdersResponse> = s.lazySchema(
  () =>
    s.object<CompaniesApiSalesOrdersResponse>(
      {
        ...companiesApiSalesOrdersResponseProperties,
        value: s.optional(s.array(s.lazy(() => salesOrderSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
