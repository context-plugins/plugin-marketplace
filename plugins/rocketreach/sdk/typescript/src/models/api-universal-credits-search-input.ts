import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { OrderByEnum, orderByEnumSchema } from "./order-by-enum.js";
import { personQuerySchema, type PersonQuery } from "./person-query.js";

export type ApiUniversalCreditsSearchInput = {
  /**
   * Paginate through search results by returning results starting from this value (counting from
   * 1).
   *
   * @default 1
   */
  start?: number;
  /** Maximum number of search results to return per page. @default 100 */
  pageSize?: number;
  query?: PersonQuery;
  /**
   * Specifies the ordering of search results. "popularity" matches the default ordering of the
   * Search web app.
   *
   * * `relevance` - relevance
   * * `popularity` - popularity
   * * `score` - score
   *
   * @default OrderByEnum.Relevance
   */
  orderBy?: OrderByEnum;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiUniversalCreditsSearchInputProperties: s.Shape<ApiUniversalCreditsSearchInput> = {
  start: s.defaulted(s.int(), 1),
  pageSize: s.defaulted(s.int(), 100),
  query: s.optional(s.lazy(() => personQuerySchema)),
  orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
  },
};

export const apiUniversalCreditsSearchInputInternalSchema: Schema<ApiUniversalCreditsSearchInput> =
  s.object<ApiUniversalCreditsSearchInput>(apiUniversalCreditsSearchInputProperties, {
    additionalProperties: s.json(),
  });

export const apiUniversalCreditsSearchInputSchema: Schema<ApiUniversalCreditsSearchInput> = s.lazySchema(() =>
  s.object<ApiUniversalCreditsSearchInput>(
    {
      ...apiUniversalCreditsSearchInputProperties,
      start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
    },
    { additionalProperties: s.json() },
  ),
);
