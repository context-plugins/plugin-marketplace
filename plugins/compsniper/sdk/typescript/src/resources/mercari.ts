import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { IncludeListedAt, includeListedAtSchema } from "../models/include-listed-at.js";
import {
  ItemConditionCompSniperMarketplaceAndShippingMercariApi,
  itemConditionCompSniperMarketplaceAndShippingMercariApiSchema,
} from "../models/item-condition-comp-sniper-marketplace-and-shipping-mercari-api.js";
import { Sold, soldSchema } from "../models/sold.js";
import {
  SortOrderCompSniperMarketplaceAndShippingMercariApi,
  sortOrderCompSniperMarketplaceAndShippingMercariApiSchema,
} from "../models/sort-order-comp-sniper-marketplace-and-shipping-mercari-api.js";
import {
  v1MercariResponse12Schema,
  type V1MercariResponse12,
} from "../models/unions/v1-mercari-response12.js";
import { v1MercariResponseSchema, type V1MercariResponse } from "../models/v1-mercari-response.js";
import { v1Mercari400Error1Schema, type V1Mercari400Error1 } from "../models/v1-mercari400-error1.js";
import { v1Mercari401Error1Schema, type V1Mercari401Error1 } from "../models/v1-mercari401-error1.js";
import { v1Mercari500Error1Schema, type V1Mercari500Error1 } from "../models/v1-mercari500-error1.js";
import { v1Mercari502Error1Schema, type V1Mercari502Error1 } from "../models/v1-mercari502-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Mercari {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Mercari sold or active listings
   *
   * @remarks
   * Returns one page of public Mercari sold or active listings through a managed anonymous guest
   * session. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache
   * headers match the other CompSniper endpoints. Each successful page uses one CompSniper request
   * and returns up to 100 items.
   *
   * @returns Mercari listings
   *
   * @throws {@link Mercari.SearchMercariListingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMercariListings(
    request: Mercari.SearchMercariListingsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MercariResponse, Mercari.SearchMercariListingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/mercari"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 100) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(
              sortOrderCompSniperMarketplaceAndShippingMercariApiSchema,
              SortOrderCompSniperMarketplaceAndShippingMercariApi.BestMatch,
            ),
          },
          { name: "minPrice", value: request.minPrice, schema: s.optionalNullable(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optionalNullable(s.float64()) },
          {
            name: "itemCondition",
            value: request.itemCondition,
            schema: s.defaulted(
              itemConditionCompSniperMarketplaceAndShippingMercariApiSchema,
              ItemConditionCompSniperMarketplaceAndShippingMercariApi.Any,
            ),
          },
          { name: "categoryId", value: request.categoryId, schema: s.optional(s.string()) },
          { name: "brandId", value: request.brandId, schema: s.optional(s.string()) },
          { name: "sold", value: request.sold, schema: s.defaulted(soldSchema, Sold.True) },
          {
            name: "includeListedAt",
            value: request.includeListedAt,
            schema: s.defaulted(includeListedAtSchema, IncludeListedAt.False),
          },
        ],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MercariResponseSchema },
        errorFactory: Mercari.SearchMercariListingsError,
      },
      options,
    );
  }
}

export namespace Mercari {
  export type SearchMercariListingsRequest = {
    keyword: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    count?: number;
    /**
     * Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is
     * accepted as a compatibility alias for recentlySold.
     *
     * @default SortOrderCompSniperMarketplaceAndShippingMercariApi.BestMatch
     */
    sortOrder?: SortOrderCompSniperMarketplaceAndShippingMercariApi;
    minPrice?: number | null;
    maxPrice?: number | null;
    /** @default ItemConditionCompSniperMarketplaceAndShippingMercariApi.Any */
    itemCondition?: ItemConditionCompSniperMarketplaceAndShippingMercariApi;
    categoryId?: string;
    brandId?: string;
    /** @default Sold.True */
    sold?: Sold;
    /** @default IncludeListedAt.False */
    includeListedAt?: IncludeListedAt;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const searchMercariListingsRequestSchema: Schema<SearchMercariListingsRequest> = s.lazySchema(() =>
    s.object<SearchMercariListingsRequest>({
      keyword: s.string().check(s.minLength(1)),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
      sortOrder: s.defaulted(
        sortOrderCompSniperMarketplaceAndShippingMercariApiSchema,
        SortOrderCompSniperMarketplaceAndShippingMercariApi.BestMatch,
      ),
      minPrice: s.optionalNullable(s.float64().check(s.gte(0))),
      maxPrice: s.optionalNullable(s.float64().check(s.gte(0))),
      itemCondition: s.defaulted(
        itemConditionCompSniperMarketplaceAndShippingMercariApiSchema,
        ItemConditionCompSniperMarketplaceAndShippingMercariApi.Any,
      ),
      categoryId: s.optional(s.string()),
      brandId: s.optional(s.string()),
      sold: s.defaulted(soldSchema, Sold.True),
      includeListedAt: s.defaulted(includeListedAtSchema, IncludeListedAt.False),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class SearchMercariListingsError extends ApiError {
    declare readonly payload:
      | Declared<"v1Mercari400Error1", V1Mercari400Error1>
      | Declared<"v1Mercari401Error1", V1Mercari401Error1>
      | Declared<"v1MercariResponse12", V1MercariResponse12>
      | Declared<"v1Mercari500Error1", V1Mercari500Error1>
      | Declared<"v1Mercari502Error1", V1Mercari502Error1>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchMercariListingsError> = [
      { on: 400, kind: "v1Mercari400Error1", decode: { kind: "json", schema: v1Mercari400Error1Schema } },
      { on: 401, kind: "v1Mercari401Error1", decode: { kind: "json", schema: v1Mercari401Error1Schema } },
      { on: 429, kind: "v1MercariResponse12", decode: { kind: "json", schema: v1MercariResponse12Schema } },
      { on: 500, kind: "v1Mercari500Error1", decode: { kind: "json", schema: v1Mercari500Error1Schema } },
      { on: 502, kind: "v1Mercari502Error1", decode: { kind: "json", schema: v1Mercari502Error1Schema } },
      { on: 503, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
