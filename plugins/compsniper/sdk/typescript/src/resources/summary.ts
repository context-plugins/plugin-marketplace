import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { buyingFormatSchema, type BuyingFormat } from "../models/buying-format.js";
import { EbaySite, ebaySiteSchema } from "../models/ebay-site.js";
import { itemConditionSchema, type ItemCondition } from "../models/item-condition.js";
import { sellerTypeSchema, type SellerType } from "../models/seller-type.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { summaryResponseSchema, type SummaryResponse } from "../models/summary-response.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Summary {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get sold-price intelligence without listing rows
   *
   * @remarks
   * Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price
   * summary, raw comparison evidence, result counts, and cache status.
   *
   * @returns Price summary and raw-versus-cleaned evidence.
   *
   * @throws {@link Summary.GetPriceSummaryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPriceSummary(
    request: Summary.GetPriceSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<SummaryResponse, Summary.GetPriceSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 240) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          {
            name: "ebaySite",
            value: request.ebaySite,
            schema: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
          },
          { name: "categoryId", value: request.categoryId, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "minPrice", value: request.minPrice, schema: s.optional(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
          {
            name: "itemCondition",
            value: request.itemCondition,
            schema: s.optional(s.lazy(() => itemConditionSchema)),
          },
          { name: "conditionId", value: request.conditionId, schema: s.optional(s.int()) },
          {
            name: "buyingFormat",
            value: request.buyingFormat,
            schema: s.optional(s.lazy(() => buyingFormatSchema)),
          },
          {
            name: "sellerType",
            value: request.sellerType,
            schema: s.optional(s.lazy(() => sellerTypeSchema)),
          },
          { name: "soldAfter", value: request.soldAfter, schema: s.optional(s.dateOnly()) },
          { name: "soldBefore", value: request.soldBefore, schema: s.optional(s.dateOnly()) },
          { name: "aspectFilter", value: request.aspectFilter, schema: s.optional(s.string()) },
          { name: "exactMatch", value: request.exactMatch, schema: s.defaulted(s.boolean(), false) },
          { name: "relevance", value: request.relevance, schema: s.defaulted(s.boolean(), true) },
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
        success: { kind: "json", schema: summaryResponseSchema },
        errorFactory: Summary.GetPriceSummaryError,
      },
      options,
    );
  }
}

export namespace Summary {
  export type GetPriceSummaryRequest = {
    keyword: string;
    /** @default 240 */
    count?: number;
    /** @default 1 */
    page?: number;
    /** @default EbaySite.EbayCom */
    ebaySite?: EbaySite;
    categoryId?: string;
    sortOrder?: SortOrder;
    minPrice?: number;
    maxPrice?: number;
    itemCondition?: ItemCondition;
    conditionId?: number;
    buyingFormat?: BuyingFormat;
    sellerType?: SellerType;
    soldAfter?: string;
    soldBefore?: string;
    /** JSON object of eBay facet names and values. */
    aspectFilter?: string;
    /** @default false */
    exactMatch?: boolean;
    /** @default true */
    relevance?: boolean;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getPriceSummaryRequestSchema: Schema<GetPriceSummaryRequest> = s.lazySchema(() =>
    s.object<GetPriceSummaryRequest>({
      keyword: s.string(),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 240),
      page: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 1),
      ebaySite: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
      categoryId: s.optional(s.string()),
      sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
      minPrice: s.optional(s.float64()),
      maxPrice: s.optional(s.float64()),
      itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
      conditionId: s.optional(s.int().check(s.gte(0))),
      buyingFormat: s.optional(s.lazy(() => buyingFormatSchema)),
      sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
      soldAfter: s.optional(s.dateOnly()),
      soldBefore: s.optional(s.dateOnly()),
      aspectFilter: s.optional(s.string()),
      exactMatch: s.defaulted(s.boolean(), false),
      relevance: s.defaulted(s.boolean(), true),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetPriceSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPriceSummaryError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
