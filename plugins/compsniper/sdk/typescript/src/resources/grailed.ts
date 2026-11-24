import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Condition, conditionSchema } from "../models/condition.js";
import { Department, departmentSchema } from "../models/department.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortBy1, sortBy1Schema } from "../models/sort-by1.js";
import {
  v1GrailedListingsResponseSchema,
  type V1GrailedListingsResponse,
} from "../models/v1-grailed-listings-response.js";
import {
  v1GrailedListings400Error1Schema,
  type V1GrailedListings400Error1,
} from "../models/v1-grailed-listings400-error1.js";
import {
  v1GrailedListings401Error1Schema,
  type V1GrailedListings401Error1,
} from "../models/v1-grailed-listings401-error1.js";
import {
  v1GrailedListings429Error1Schema,
  type V1GrailedListings429Error1,
} from "../models/v1-grailed-listings429-error1.js";
import {
  v1GrailedListings502Error1Schema,
  type V1GrailedListings502Error1,
} from "../models/v1-grailed-listings502-error1.js";
import {
  v1GrailedListings503Error1Schema,
  type V1GrailedListings503Error1,
} from "../models/v1-grailed-listings503-error1.js";
import {
  v1GrailedSoldResponseSchema,
  type V1GrailedSoldResponse,
} from "../models/v1-grailed-sold-response.js";
import {
  v1GrailedSold400Error1Schema,
  type V1GrailedSold400Error1,
} from "../models/v1-grailed-sold400-error1.js";
import {
  v1GrailedSold401Error1Schema,
  type V1GrailedSold401Error1,
} from "../models/v1-grailed-sold401-error1.js";
import {
  v1GrailedSold429Error1Schema,
  type V1GrailedSold429Error1,
} from "../models/v1-grailed-sold429-error1.js";
import {
  v1GrailedSold502Error1Schema,
  type V1GrailedSold502Error1,
} from "../models/v1-grailed-sold502-error1.js";
import {
  v1GrailedSold503Error1Schema,
  type V1GrailedSold503Error1,
} from "../models/v1-grailed-sold503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Grailed {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Grailed active listings
   *
   * @remarks
   * Current Grailed listings with asking price, US shipping, offers, size, condition and designer.
   * One successful call uses one request.
   *
   * @returns Active listings
   *
   * @throws {@link Grailed.GetV1GrailedListingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1GrailedListings(
    request: Grailed.GetV1GrailedListingsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GrailedListingsResponse, Grailed.GetV1GrailedListingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/grailed/listings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          {
            name: "department",
            value: request.department,
            schema: s.defaulted(departmentSchema, Department.Any),
          },
          {
            name: "condition",
            value: request.condition,
            schema: s.defaulted(conditionSchema, Condition.Any),
          },
          { name: "minPrice", value: request.minPrice, schema: s.optional(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 40) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBy1Schema, SortBy1.Default) },
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
        success: { kind: "json", schema: v1GrailedListingsResponseSchema },
        errorFactory: Grailed.GetV1GrailedListingsError,
      },
      options,
    );
  }

  /**
   * Grailed sold listings
   *
   * @remarks
   * Grailed sold listings with the price the buyer paid (accepted offers included), the asking
   * price it sold from, sold date, shipping paid, size, condition and designer. Up to 100 rows per
   * page and 1,000 per search. One successful call uses one request.
   *
   * @returns Sold listings
   *
   * @throws {@link Grailed.GetV1GrailedSoldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1GrailedSold(
    request: Grailed.GetV1GrailedSoldRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GrailedSoldResponse, Grailed.GetV1GrailedSoldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/grailed/sold"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          {
            name: "department",
            value: request.department,
            schema: s.defaulted(departmentSchema, Department.Any),
          },
          {
            name: "condition",
            value: request.condition,
            schema: s.defaulted(conditionSchema, Condition.Any),
          },
          { name: "minPrice", value: request.minPrice, schema: s.optional(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 40) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.Recent) },
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
        success: { kind: "json", schema: v1GrailedSoldResponseSchema },
        errorFactory: Grailed.GetV1GrailedSoldError,
      },
      options,
    );
  }
}

export namespace Grailed {
  export type GetV1GrailedListingsRequest = {
    keyword: string;
    /** @default Department.Any */
    department?: Department;
    /** @default Condition.Any */
    condition?: Condition;
    minPrice?: number;
    maxPrice?: number;
    /** @default 40 */
    count?: number;
    /** @default 1 */
    page?: number;
    /** @default SortBy1.Default */
    sortBy?: SortBy1;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1GrailedListingsRequestSchema: Schema<GetV1GrailedListingsRequest> = s.lazySchema(() =>
    s.object<GetV1GrailedListingsRequest>({
      keyword: s.string().check(s.maxLength(300)),
      department: s.defaulted(departmentSchema, Department.Any),
      condition: s.defaulted(conditionSchema, Condition.Any),
      minPrice: s.optional(s.float64().check(s.gte(0))),
      maxPrice: s.optional(s.float64().check(s.gte(0))),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 40),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      sortBy: s.defaulted(sortBy1Schema, SortBy1.Default),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1GrailedListingsError extends ApiError {
    declare readonly payload:
      | Declared<"v1GrailedListings400Error1", V1GrailedListings400Error1>
      | Declared<"v1GrailedListings401Error1", V1GrailedListings401Error1>
      | Declared<"v1GrailedListings429Error1", V1GrailedListings429Error1>
      | Declared<"v1GrailedListings502Error1", V1GrailedListings502Error1>
      | Declared<"v1GrailedListings503Error1", V1GrailedListings503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1GrailedListingsError> = [
      {
        on: 400,
        kind: "v1GrailedListings400Error1",
        decode: { kind: "json", schema: v1GrailedListings400Error1Schema },
      },
      {
        on: 401,
        kind: "v1GrailedListings401Error1",
        decode: { kind: "json", schema: v1GrailedListings401Error1Schema },
      },
      {
        on: 429,
        kind: "v1GrailedListings429Error1",
        decode: { kind: "json", schema: v1GrailedListings429Error1Schema },
      },
      {
        on: 502,
        kind: "v1GrailedListings502Error1",
        decode: { kind: "json", schema: v1GrailedListings502Error1Schema },
      },
      {
        on: 503,
        kind: "v1GrailedListings503Error1",
        decode: { kind: "json", schema: v1GrailedListings503Error1Schema },
      },
    ];
  }

  export type GetV1GrailedSoldRequest = {
    keyword: string;
    /** @default Department.Any */
    department?: Department;
    /** @default Condition.Any */
    condition?: Condition;
    minPrice?: number;
    maxPrice?: number;
    /** @default 40 */
    count?: number;
    /** @default 1 */
    page?: number;
    /** @default SortBy.Recent */
    sortBy?: SortBy;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1GrailedSoldRequestSchema: Schema<GetV1GrailedSoldRequest> = s.lazySchema(() =>
    s.object<GetV1GrailedSoldRequest>({
      keyword: s.string().check(s.maxLength(300)),
      department: s.defaulted(departmentSchema, Department.Any),
      condition: s.defaulted(conditionSchema, Condition.Any),
      minPrice: s.optional(s.float64().check(s.gte(0))),
      maxPrice: s.optional(s.float64().check(s.gte(0))),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 40),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      sortBy: s.defaulted(sortBySchema, SortBy.Recent),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1GrailedSoldError extends ApiError {
    declare readonly payload:
      | Declared<"v1GrailedSold400Error1", V1GrailedSold400Error1>
      | Declared<"v1GrailedSold401Error1", V1GrailedSold401Error1>
      | Declared<"v1GrailedSold429Error1", V1GrailedSold429Error1>
      | Declared<"v1GrailedSold502Error1", V1GrailedSold502Error1>
      | Declared<"v1GrailedSold503Error1", V1GrailedSold503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1GrailedSoldError> = [
      {
        on: 400,
        kind: "v1GrailedSold400Error1",
        decode: { kind: "json", schema: v1GrailedSold400Error1Schema },
      },
      {
        on: 401,
        kind: "v1GrailedSold401Error1",
        decode: { kind: "json", schema: v1GrailedSold401Error1Schema },
      },
      {
        on: 429,
        kind: "v1GrailedSold429Error1",
        decode: { kind: "json", schema: v1GrailedSold429Error1Schema },
      },
      {
        on: 502,
        kind: "v1GrailedSold502Error1",
        decode: { kind: "json", schema: v1GrailedSold502Error1Schema },
      },
      {
        on: 503,
        kind: "v1GrailedSold503Error1",
        decode: { kind: "json", schema: v1GrailedSold503Error1Schema },
      },
    ];
  }
}
