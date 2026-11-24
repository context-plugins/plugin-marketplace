import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyQuerySchema, type CompanyQuery } from "./company-query.js";
import { OrderByEnum, orderByEnumSchema } from "./order-by-enum.js";

export type ApiUniversalCreditsPublicCompiledCompanySearchInput = {
  /**
   * Paginate through search results by returning results starting from this value (counting from
   * 1).
   *
   * @default 1
   */
  start?: number;
  /** Maximum number of search results to return per page. @default 100 */
  pageSize?: number;
  query?: CompanyQuery;
  /** @default OrderByEnum.Relevance */
  orderBy?: OrderByEnum;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiUniversalCreditsPublicCompiledCompanySearchInputProperties: s.Shape<ApiUniversalCreditsPublicCompiledCompanySearchInput> =
  {
    start: s.defaulted(s.int(), 1),
    pageSize: s.defaulted(s.int(), 100),
    query: s.optional(s.lazy(() => companyQuerySchema)),
    orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
    _keysMap: {
      pageSize: "page_size",
      orderBy: "order_by",
    },
  };

export const apiUniversalCreditsPublicCompiledCompanySearchInputInternalSchema: Schema<ApiUniversalCreditsPublicCompiledCompanySearchInput> =
  s.object<ApiUniversalCreditsPublicCompiledCompanySearchInput>(
    apiUniversalCreditsPublicCompiledCompanySearchInputProperties,
    { additionalProperties: s.json() },
  );

export const apiUniversalCreditsPublicCompiledCompanySearchInputSchema: Schema<ApiUniversalCreditsPublicCompiledCompanySearchInput> =
  s.lazySchema(() =>
    s.object<ApiUniversalCreditsPublicCompiledCompanySearchInput>(
      {
        ...apiUniversalCreditsPublicCompiledCompanySearchInputProperties,
        start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
      },
      { additionalProperties: s.json() },
    ),
  );
