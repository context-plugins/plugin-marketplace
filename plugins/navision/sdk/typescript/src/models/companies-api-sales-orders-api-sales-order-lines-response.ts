import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  salesOrderLineInternalSchema,
  salesOrderLineSchema,
  type SalesOrderLine,
} from "./sales-order-line.js";

export type CompaniesApiSalesOrdersApiSalesOrderLinesResponse = {
  value?: SalesOrderLine[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiSalesOrdersApiSalesOrderLinesResponseProperties: s.Shape<CompaniesApiSalesOrdersApiSalesOrderLinesResponse> =
  {
    value: s.optional(s.array(s.lazy(() => salesOrderLineInternalSchema))),
  };

export const companiesApiSalesOrdersApiSalesOrderLinesResponseInternalSchema: Schema<CompaniesApiSalesOrdersApiSalesOrderLinesResponse> =
  s.object<CompaniesApiSalesOrdersApiSalesOrderLinesResponse>(
    companiesApiSalesOrdersApiSalesOrderLinesResponseProperties,
    { additionalProperties: s.json() },
  );

export const companiesApiSalesOrdersApiSalesOrderLinesResponseSchema: Schema<CompaniesApiSalesOrdersApiSalesOrderLinesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiSalesOrdersApiSalesOrderLinesResponse>(
      {
        ...companiesApiSalesOrdersApiSalesOrderLinesResponseProperties,
        value: s.optional(s.array(s.lazy(() => salesOrderLineSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
