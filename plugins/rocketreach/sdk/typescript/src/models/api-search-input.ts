import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { OrderByEnum, orderByEnumSchema } from "./order-by-enum.js";
import { personQuery1Schema, type PersonQuery1 } from "./person-query1.js";

export type ApiSearchInput = {
  /** Start index of the request results (counting from 1) @default 1 */
  start?: number;
  /** Maximum number of results to return per page [1-100] @default 10 */
  pageSize?: number;
  /** Search query object for the request */
  query?: PersonQuery1;
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

const apiSearchInputProperties: s.Shape<ApiSearchInput> = {
  start: s.defaulted(s.int(), 1),
  pageSize: s.defaulted(s.int(), 10),
  query: s.optional(s.lazy(() => personQuery1Schema)),
  orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
  },
};

export const apiSearchInputInternalSchema: Schema<ApiSearchInput> = s.object<ApiSearchInput>(
  apiSearchInputProperties,
  { additionalProperties: s.json() },
);

export const apiSearchInputSchema: Schema<ApiSearchInput> = s.lazySchema(() =>
  s.object<ApiSearchInput>(
    {
      ...apiSearchInputProperties,
      start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
    },
    { additionalProperties: s.json() },
  ),
);
