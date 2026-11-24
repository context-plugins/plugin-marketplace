import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi,
  ebaySiteCompSniperMarketplaceAndShippingSoldHistoryApiSchema,
} from "../models/ebay-site-comp-sniper-marketplace-and-shipping-sold-history-api.js";
import { Limit, limitSchema } from "../models/limit.js";
import { Sort, sortSchema } from "../models/sort.js";
import {
  v1ResearchSoldResponseSchema,
  type V1ResearchSoldResponse,
} from "../models/v1-research-sold-response.js";
import {
  v1ResearchSold400Error1Schema,
  type V1ResearchSold400Error1,
} from "../models/v1-research-sold400-error1.js";
import {
  v1ResearchSold401Error1Schema,
  type V1ResearchSold401Error1,
} from "../models/v1-research-sold401-error1.js";
import {
  v1ResearchSold429Error1Schema,
  type V1ResearchSold429Error1,
} from "../models/v1-research-sold429-error1.js";
import {
  v1ResearchSold502Error1Schema,
  type V1ResearchSold502Error1,
} from "../models/v1-research-sold502-error1.js";
import {
  v1ResearchSold503Error1Schema,
  type V1ResearchSold503Error1,
} from "../models/v1-research-sold503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class SoldHistory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search up to 3 years of eBay sold history
   *
   * @remarks
   * Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight
   * eBay sites, on every plan including free. Each page of up to 50 listing-level rows uses one
   * request; failed requests are free. Prices are USD. History has its own cap of 20 searches per
   * minute per account (X-History-RateLimit-* headers, 429 history_rate_limited), on top of the
   * plan limit.
   *
   * @returns Sold history page
   *
   * @throws {@link SoldHistory.GetV1ResearchSoldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1ResearchSold(
    request: SoldHistory.GetV1ResearchSoldRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ResearchSoldResponse, SoldHistory.GetV1ResearchSoldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/research/sold"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.dateOnly() },
          { name: "endDate", value: request.endDate, schema: s.dateOnly() },
          {
            name: "ebaySite",
            value: request.ebaySite,
            schema: s.defaulted(
              ebaySiteCompSniperMarketplaceAndShippingSoldHistoryApiSchema,
              EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EbayCom,
            ),
          },
          { name: "sort", value: request.sort, schema: s.defaulted(sortSchema, Sort.QuantityAscending) },
          { name: "limit", value: request.limit, schema: s.defaulted(limitSchema, Limit._50) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "singleUnitOnly", value: request.singleUnitOnly, schema: s.defaulted(s.boolean(), false) },
          {
            name: "allListingSites",
            value: request.allListingSites,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "relevance", value: request.relevance, schema: s.defaulted(s.boolean(), false) },
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
        success: { kind: "json", schema: v1ResearchSoldResponseSchema },
        errorFactory: SoldHistory.GetV1ResearchSoldError,
      },
      options,
    );
  }
}

export namespace SoldHistory {
  export type GetV1ResearchSoldRequest = {
    keyword: string;
    startDate: string;
    endDate: string;
    /** @default EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EbayCom */
    ebaySite?: EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi;
    /** @default Sort.QuantityAscending */
    sort?: Sort;
    /** @default Limit._50 */
    limit?: Limit;
    /** @default 1 */
    page?: number;
    /** @default false */
    singleUnitOnly?: boolean;
    /** @default false */
    allListingSites?: boolean;
    /** @default false */
    relevance?: boolean;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1ResearchSoldRequestSchema: Schema<GetV1ResearchSoldRequest> = s.lazySchema(() =>
    s.object<GetV1ResearchSoldRequest>({
      keyword: s.string().check(s.minLength(1), s.maxLength(200)),
      startDate: s.dateOnly(),
      endDate: s.dateOnly(),
      ebaySite: s.defaulted(
        ebaySiteCompSniperMarketplaceAndShippingSoldHistoryApiSchema,
        EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EbayCom,
      ),
      sort: s.defaulted(sortSchema, Sort.QuantityAscending),
      limit: s.defaulted(limitSchema, Limit._50),
      page: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 1),
      singleUnitOnly: s.defaulted(s.boolean(), false),
      allListingSites: s.defaulted(s.boolean(), false),
      relevance: s.defaulted(s.boolean(), false),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1ResearchSoldError extends ApiError {
    declare readonly payload:
      | Declared<"v1ResearchSold400Error1", V1ResearchSold400Error1>
      | Declared<"v1ResearchSold401Error1", V1ResearchSold401Error1>
      | Declared<"v1ResearchSold429Error1", V1ResearchSold429Error1>
      | Declared<"v1ResearchSold502Error1", V1ResearchSold502Error1>
      | Declared<"v1ResearchSold503Error1", V1ResearchSold503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1ResearchSoldError> = [
      {
        on: 400,
        kind: "v1ResearchSold400Error1",
        decode: { kind: "json", schema: v1ResearchSold400Error1Schema },
      },
      {
        on: 401,
        kind: "v1ResearchSold401Error1",
        decode: { kind: "json", schema: v1ResearchSold401Error1Schema },
      },
      {
        on: 429,
        kind: "v1ResearchSold429Error1",
        decode: { kind: "json", schema: v1ResearchSold429Error1Schema },
      },
      {
        on: 502,
        kind: "v1ResearchSold502Error1",
        decode: { kind: "json", schema: v1ResearchSold502Error1Schema },
      },
      {
        on: 503,
        kind: "v1ResearchSold503Error1",
        decode: { kind: "json", schema: v1ResearchSold503Error1Schema },
      },
    ];
  }
}
