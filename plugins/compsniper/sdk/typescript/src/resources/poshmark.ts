import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ConditionCompSniperMarketplaceAndShippingPoshmarkApi,
  conditionCompSniperMarketplaceAndShippingPoshmarkApiSchema,
} from "../models/condition-comp-sniper-marketplace-and-shipping-poshmark-api.js";
import {
  DepartmentCompSniperMarketplaceAndShippingPoshmarkApi,
  departmentCompSniperMarketplaceAndShippingPoshmarkApiSchema,
} from "../models/department-comp-sniper-marketplace-and-shipping-poshmark-api.js";
import { Enrich, enrichSchema } from "../models/enrich.js";
import {
  SortByCompSniperMarketplaceAndShippingPoshmarkApi,
  sortByCompSniperMarketplaceAndShippingPoshmarkApiSchema,
} from "../models/sort-by-comp-sniper-marketplace-and-shipping-poshmark-api.js";
import {
  v1PoshmarkSoldResponse12Schema,
  type V1PoshmarkSoldResponse12,
} from "../models/unions/v1-poshmark-sold-response12.js";
import {
  v1PoshmarkSoldResponseSchema,
  type V1PoshmarkSoldResponse,
} from "../models/v1-poshmark-sold-response.js";
import {
  v1PoshmarkSold400Error1Schema,
  type V1PoshmarkSold400Error1,
} from "../models/v1-poshmark-sold400-error1.js";
import {
  v1PoshmarkSold401Error1Schema,
  type V1PoshmarkSold401Error1,
} from "../models/v1-poshmark-sold401-error1.js";
import {
  v1PoshmarkSold500Error1Schema,
  type V1PoshmarkSold500Error1,
} from "../models/v1-poshmark-sold500-error1.js";
import {
  v1PoshmarkSold502Error1Schema,
  type V1PoshmarkSold502Error1,
} from "../models/v1-poshmark-sold502-error1.js";
import {
  v1PoshmarkSold503Error1Schema,
  type V1PoshmarkSold503Error1,
} from "../models/v1-poshmark-sold503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Poshmark {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Scrape Poshmark sold listings
   *
   * @remarks
   * Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly
   * quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints.
   * Each successful page uses one CompSniper request, including enrich=true. The native page
   * ceiling is 48 listings.
   *
   * @returns Sold listings
   *
   * @throws {@link Poshmark.SearchPoshmarkSoldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPoshmarkSold(
    request: Poshmark.SearchPoshmarkSoldRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PoshmarkSoldResponse, Poshmark.SearchPoshmarkSoldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/poshmark/sold"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "minPrice", value: request.minPrice, schema: s.optionalNullable(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optionalNullable(s.float64()) },
          {
            name: "department",
            value: request.department,
            schema: s.defaulted(
              departmentCompSniperMarketplaceAndShippingPoshmarkApiSchema,
              DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.All,
            ),
          },
          {
            name: "condition",
            value: request.condition,
            schema: s.defaulted(
              conditionCompSniperMarketplaceAndShippingPoshmarkApiSchema,
              ConditionCompSniperMarketplaceAndShippingPoshmarkApi.All,
            ),
          },
          { name: "brand", value: request.brand, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(
              sortByCompSniperMarketplaceAndShippingPoshmarkApiSchema,
              SortByCompSniperMarketplaceAndShippingPoshmarkApi.SoldRecently,
            ),
          },
          { name: "enrich", value: request.enrich, schema: s.defaulted(enrichSchema, Enrich.False) },
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
        success: { kind: "json", schema: v1PoshmarkSoldResponseSchema },
        errorFactory: Poshmark.SearchPoshmarkSoldError,
      },
      options,
    );
  }
}

export namespace Poshmark {
  export type SearchPoshmarkSoldRequest = {
    keyword: string;
    /** @default 1 */
    page?: number;
    minPrice?: number | null;
    maxPrice?: number | null;
    /** @default DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.All */
    department?: DepartmentCompSniperMarketplaceAndShippingPoshmarkApi;
    /** @default ConditionCompSniperMarketplaceAndShippingPoshmarkApi.All */
    condition?: ConditionCompSniperMarketplaceAndShippingPoshmarkApi;
    brand?: string;
    /** @default SortByCompSniperMarketplaceAndShippingPoshmarkApi.SoldRecently */
    sortBy?: SortByCompSniperMarketplaceAndShippingPoshmarkApi;
    /**
     * Adds public seller location, approximate sold-count evidence, and average ship time. Sold
     * date, listed date, colors, description, category, and condition are already returned when
     * present in the native search response. This still uses one CompSniper request.
     *
     * @default Enrich.False
     */
    enrich?: Enrich;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const searchPoshmarkSoldRequestSchema: Schema<SearchPoshmarkSoldRequest> = s.lazySchema(() =>
    s.object<SearchPoshmarkSoldRequest>({
      keyword: s.string().check(s.minLength(1)),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      minPrice: s.optionalNullable(s.float64().check(s.gte(0))),
      maxPrice: s.optionalNullable(s.float64().check(s.gte(0))),
      department: s.defaulted(
        departmentCompSniperMarketplaceAndShippingPoshmarkApiSchema,
        DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.All,
      ),
      condition: s.defaulted(
        conditionCompSniperMarketplaceAndShippingPoshmarkApiSchema,
        ConditionCompSniperMarketplaceAndShippingPoshmarkApi.All,
      ),
      brand: s.optional(s.string()),
      sortBy: s.defaulted(
        sortByCompSniperMarketplaceAndShippingPoshmarkApiSchema,
        SortByCompSniperMarketplaceAndShippingPoshmarkApi.SoldRecently,
      ),
      enrich: s.defaulted(enrichSchema, Enrich.False),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class SearchPoshmarkSoldError extends ApiError {
    declare readonly payload:
      | Declared<"v1PoshmarkSold400Error1", V1PoshmarkSold400Error1>
      | Declared<"v1PoshmarkSold401Error1", V1PoshmarkSold401Error1>
      | Declared<"v1PoshmarkSoldResponse12", V1PoshmarkSoldResponse12>
      | Declared<"v1PoshmarkSold500Error1", V1PoshmarkSold500Error1>
      | Declared<"v1PoshmarkSold502Error1", V1PoshmarkSold502Error1>
      | Declared<"v1PoshmarkSold503Error1", V1PoshmarkSold503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPoshmarkSoldError> = [
      {
        on: 400,
        kind: "v1PoshmarkSold400Error1",
        decode: { kind: "json", schema: v1PoshmarkSold400Error1Schema },
      },
      {
        on: 401,
        kind: "v1PoshmarkSold401Error1",
        decode: { kind: "json", schema: v1PoshmarkSold401Error1Schema },
      },
      {
        on: 429,
        kind: "v1PoshmarkSoldResponse12",
        decode: { kind: "json", schema: v1PoshmarkSoldResponse12Schema },
      },
      {
        on: 500,
        kind: "v1PoshmarkSold500Error1",
        decode: { kind: "json", schema: v1PoshmarkSold500Error1Schema },
      },
      {
        on: 502,
        kind: "v1PoshmarkSold502Error1",
        decode: { kind: "json", schema: v1PoshmarkSold502Error1Schema },
      },
      {
        on: 503,
        kind: "v1PoshmarkSold503Error1",
        decode: { kind: "json", schema: v1PoshmarkSold503Error1Schema },
      },
    ];
  }
}
