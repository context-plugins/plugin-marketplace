import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { History, historySchema } from "../models/history.js";
import {
  v1TcgplayerListingsResponseSchema,
  type V1TcgplayerListingsResponse,
} from "../models/v1-tcgplayer-listings-response.js";
import {
  v1TcgplayerListings400Error1Schema,
  type V1TcgplayerListings400Error1,
} from "../models/v1-tcgplayer-listings400-error1.js";
import {
  v1TcgplayerListings401Error1Schema,
  type V1TcgplayerListings401Error1,
} from "../models/v1-tcgplayer-listings401-error1.js";
import {
  v1TcgplayerListings429Error1Schema,
  type V1TcgplayerListings429Error1,
} from "../models/v1-tcgplayer-listings429-error1.js";
import {
  v1TcgplayerListings502Error1Schema,
  type V1TcgplayerListings502Error1,
} from "../models/v1-tcgplayer-listings502-error1.js";
import {
  v1TcgplayerListings503Error1Schema,
  type V1TcgplayerListings503Error1,
} from "../models/v1-tcgplayer-listings503-error1.js";
import {
  v1TcgplayerSoldResponseSchema,
  type V1TcgplayerSoldResponse,
} from "../models/v1-tcgplayer-sold-response.js";
import {
  v1TcgplayerSold400Error1Schema,
  type V1TcgplayerSold400Error1,
} from "../models/v1-tcgplayer-sold400-error1.js";
import {
  v1TcgplayerSold401Error1Schema,
  type V1TcgplayerSold401Error1,
} from "../models/v1-tcgplayer-sold401-error1.js";
import {
  v1TcgplayerSold429Error1Schema,
  type V1TcgplayerSold429Error1,
} from "../models/v1-tcgplayer-sold429-error1.js";
import {
  v1TcgplayerSold502Error1Schema,
  type V1TcgplayerSold502Error1,
} from "../models/v1-tcgplayer-sold502-error1.js";
import {
  v1TcgplayerSold503Error1Schema,
  type V1TcgplayerSold503Error1,
} from "../models/v1-tcgplayer-sold503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class TcGplayer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * TCGplayer active listings
   *
   * @remarks
   * Active TCGplayer listings for a product with price, shipping, condition and seller details. One
   * successful call uses one request.
   *
   * @returns Listings
   *
   * @throws {@link TcGplayer.GetV1TcgplayerListingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1TcgplayerListings(
    request: TcGplayer.GetV1TcgplayerListingsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TcgplayerListingsResponse, TcGplayer.GetV1TcgplayerListingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tcgplayer/listings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "productId", value: request.productId, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 25) },
          { name: "condition", value: request.condition, schema: s.optional(s.string()) },
          { name: "variant", value: request.variant, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: v1TcgplayerListingsResponseSchema },
        errorFactory: TcGplayer.GetV1TcgplayerListingsError,
      },
      options,
    );
  }

  /**
   * TCGplayer completed sales and price history
   *
   * @remarks
   * Full TCGplayer completed-sale history for a product, with optional market price history. One
   * successful call uses one request; repeat calls can return instantly from a short-lived saved
   * copy; send fresh=true for a live fetch.
   *
   * @returns Sales
   *
   * @throws {@link TcGplayer.GetV1TcgplayerSoldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1TcgplayerSold(
    request: TcGplayer.GetV1TcgplayerSoldRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TcgplayerSoldResponse, TcGplayer.GetV1TcgplayerSoldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tcgplayer/sold"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "productId", value: request.productId, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 100) },
          { name: "condition", value: request.condition, schema: s.optional(s.string()) },
          { name: "variant", value: request.variant, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.string()) },
          { name: "history", value: request.history, schema: s.defaulted(historySchema, History.None) },
          { name: "soldAfter", value: request.soldAfter, schema: s.optional(s.dateOnly()) },
          { name: "soldBefore", value: request.soldBefore, schema: s.optional(s.dateOnly()) },
          { name: "fresh", value: request.fresh, schema: s.defaulted(s.boolean(), false) },
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
        success: { kind: "json", schema: v1TcgplayerSoldResponseSchema },
        errorFactory: TcGplayer.GetV1TcgplayerSoldError,
      },
      options,
    );
  }
}

export namespace TcGplayer {
  export type GetV1TcgplayerListingsRequest = {
    keyword?: string;
    productId?: number;
    /** @default 1 */
    page?: number;
    /** @default 25 */
    count?: number;
    condition?: string;
    variant?: string;
    language?: string;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1TcgplayerListingsRequestSchema: Schema<GetV1TcgplayerListingsRequest> = s.lazySchema(() =>
    s.object<GetV1TcgplayerListingsRequest>({
      keyword: s.optional(s.string().check(s.maxLength(300))),
      productId: s.optional(s.int().check(s.gte(1))),
      page: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 1),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 25),
      condition: s.optional(s.string()),
      variant: s.optional(s.string()),
      language: s.optional(s.string()),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1TcgplayerListingsError extends ApiError {
    declare readonly payload:
      | Declared<"v1TcgplayerListings400Error1", V1TcgplayerListings400Error1>
      | Declared<"v1TcgplayerListings401Error1", V1TcgplayerListings401Error1>
      | Declared<"v1TcgplayerListings429Error1", V1TcgplayerListings429Error1>
      | Declared<"v1TcgplayerListings502Error1", V1TcgplayerListings502Error1>
      | Declared<"v1TcgplayerListings503Error1", V1TcgplayerListings503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1TcgplayerListingsError> = [
      {
        on: 400,
        kind: "v1TcgplayerListings400Error1",
        decode: { kind: "json", schema: v1TcgplayerListings400Error1Schema },
      },
      {
        on: 401,
        kind: "v1TcgplayerListings401Error1",
        decode: { kind: "json", schema: v1TcgplayerListings401Error1Schema },
      },
      {
        on: 429,
        kind: "v1TcgplayerListings429Error1",
        decode: { kind: "json", schema: v1TcgplayerListings429Error1Schema },
      },
      {
        on: 502,
        kind: "v1TcgplayerListings502Error1",
        decode: { kind: "json", schema: v1TcgplayerListings502Error1Schema },
      },
      {
        on: 503,
        kind: "v1TcgplayerListings503Error1",
        decode: { kind: "json", schema: v1TcgplayerListings503Error1Schema },
      },
    ];
  }

  export type GetV1TcgplayerSoldRequest = {
    keyword?: string;
    productId?: number;
    /** @default 100 */
    count?: number;
    condition?: string;
    variant?: string;
    language?: string;
    /** @default History.None */
    history?: History;
    soldAfter?: string;
    soldBefore?: string;
    /** @default false */
    fresh?: boolean;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1TcgplayerSoldRequestSchema: Schema<GetV1TcgplayerSoldRequest> = s.lazySchema(() =>
    s.object<GetV1TcgplayerSoldRequest>({
      keyword: s.optional(s.string().check(s.maxLength(300))),
      productId: s.optional(s.int().check(s.gte(1))),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(250)), 100),
      condition: s.optional(s.string()),
      variant: s.optional(s.string()),
      language: s.optional(s.string()),
      history: s.defaulted(historySchema, History.None),
      soldAfter: s.optional(s.dateOnly()),
      soldBefore: s.optional(s.dateOnly()),
      fresh: s.defaulted(s.boolean(), false),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1TcgplayerSoldError extends ApiError {
    declare readonly payload:
      | Declared<"v1TcgplayerSold400Error1", V1TcgplayerSold400Error1>
      | Declared<"v1TcgplayerSold401Error1", V1TcgplayerSold401Error1>
      | Declared<"v1TcgplayerSold429Error1", V1TcgplayerSold429Error1>
      | Declared<"v1TcgplayerSold502Error1", V1TcgplayerSold502Error1>
      | Declared<"v1TcgplayerSold503Error1", V1TcgplayerSold503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1TcgplayerSoldError> = [
      {
        on: 400,
        kind: "v1TcgplayerSold400Error1",
        decode: { kind: "json", schema: v1TcgplayerSold400Error1Schema },
      },
      {
        on: 401,
        kind: "v1TcgplayerSold401Error1",
        decode: { kind: "json", schema: v1TcgplayerSold401Error1Schema },
      },
      {
        on: 429,
        kind: "v1TcgplayerSold429Error1",
        decode: { kind: "json", schema: v1TcgplayerSold429Error1Schema },
      },
      {
        on: 502,
        kind: "v1TcgplayerSold502Error1",
        decode: { kind: "json", schema: v1TcgplayerSold502Error1Schema },
      },
      {
        on: 503,
        kind: "v1TcgplayerSold503Error1",
        decode: { kind: "json", schema: v1TcgplayerSold503Error1Schema },
      },
    ];
  }
}
