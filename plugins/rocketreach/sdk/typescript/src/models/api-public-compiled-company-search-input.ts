import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyQuery1Schema, type CompanyQuery1 } from "./company-query1.js";
import { OrderByEnum, orderByEnumSchema } from "./order-by-enum.js";

export type ApiPublicCompiledCompanySearchInput = {
  /** Start index of the request results (counting from 1) @default 1 */
  start?: number;
  /** Maximum number of results to return per page [1-100] @default 10 */
  pageSize?: number;
  /** Search query object for the request */
  query?: CompanyQuery1;
  /**
   * Specifies the ordering of search results. "popularity" matches the default ordering of the
   * Search web app.
   *
   * @default OrderByEnum.Relevance
   */
  orderBy?: OrderByEnum;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiPublicCompiledCompanySearchInputProperties: s.Shape<ApiPublicCompiledCompanySearchInput> = {
  start: s.defaulted(s.int(), 1),
  pageSize: s.defaulted(s.int(), 10),
  query: s.optional(s.lazy(() => companyQuery1Schema)),
  orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
  },
};

export const apiPublicCompiledCompanySearchInputInternalSchema: Schema<ApiPublicCompiledCompanySearchInput> =
  s.object<ApiPublicCompiledCompanySearchInput>(apiPublicCompiledCompanySearchInputProperties, {
    additionalProperties: s.json(),
  });

export const apiPublicCompiledCompanySearchInputSchema: Schema<ApiPublicCompiledCompanySearchInput> =
  s.lazySchema(() =>
    s.object<ApiPublicCompiledCompanySearchInput>(
      {
        ...apiPublicCompiledCompanySearchInputProperties,
        start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      },
      { additionalProperties: s.json() },
    ),
  );
