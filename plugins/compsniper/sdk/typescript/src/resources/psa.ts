import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameSchema, type Game } from "../models/game.js";
import { v1PsaCardResponseSchema, type V1PsaCardResponse } from "../models/v1-psa-card-response.js";
import { v1PsaCard400Error1Schema, type V1PsaCard400Error1 } from "../models/v1-psa-card400-error1.js";
import { v1PsaCard401Error1Schema, type V1PsaCard401Error1 } from "../models/v1-psa-card401-error1.js";
import { v1PsaCard404Error1Schema, type V1PsaCard404Error1 } from "../models/v1-psa-card404-error1.js";
import { v1PsaCard429Error1Schema, type V1PsaCard429Error1 } from "../models/v1-psa-card429-error1.js";
import { v1PsaCard502Error1Schema, type V1PsaCard502Error1 } from "../models/v1-psa-card502-error1.js";
import { v1PsaCard503Error1Schema, type V1PsaCard503Error1 } from "../models/v1-psa-card503-error1.js";
import { v1PsaSearchResponseSchema, type V1PsaSearchResponse } from "../models/v1-psa-search-response.js";
import { v1PsaSearch400Error1Schema, type V1PsaSearch400Error1 } from "../models/v1-psa-search400-error1.js";
import { v1PsaSearch401Error1Schema, type V1PsaSearch401Error1 } from "../models/v1-psa-search401-error1.js";
import { v1PsaSearch429Error1Schema, type V1PsaSearch429Error1 } from "../models/v1-psa-search429-error1.js";
import { v1PsaSearch502Error1Schema, type V1PsaSearch502Error1 } from "../models/v1-psa-search502-error1.js";
import { v1PsaSearch503Error1Schema, type V1PsaSearch503Error1 } from "../models/v1-psa-search503-error1.js";
import { v1PsaSetResponseSchema, type V1PsaSetResponse } from "../models/v1-psa-set-response.js";
import { v1PsaSet400Error1Schema, type V1PsaSet400Error1 } from "../models/v1-psa-set400-error1.js";
import { v1PsaSet401Error1Schema, type V1PsaSet401Error1 } from "../models/v1-psa-set401-error1.js";
import { v1PsaSet429Error1Schema, type V1PsaSet429Error1 } from "../models/v1-psa-set429-error1.js";
import { v1PsaSet502Error1Schema, type V1PsaSet502Error1 } from "../models/v1-psa-set502-error1.js";
import { v1PsaSet503Error1Schema, type V1PsaSet503Error1 } from "../models/v1-psa-set503-error1.js";
import { v1PsaSetsResponseSchema, type V1PsaSetsResponse } from "../models/v1-psa-sets-response.js";
import { v1PsaSets400Error1Schema, type V1PsaSets400Error1 } from "../models/v1-psa-sets400-error1.js";
import { v1PsaSets401Error1Schema, type V1PsaSets401Error1 } from "../models/v1-psa-sets401-error1.js";
import { v1PsaSets429Error1Schema, type V1PsaSets429Error1 } from "../models/v1-psa-sets429-error1.js";
import { v1PsaSets502Error1Schema, type V1PsaSets502Error1 } from "../models/v1-psa-sets502-error1.js";
import { v1PsaSets503Error1Schema, type V1PsaSets503Error1 } from "../models/v1-psa-sets503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Psa {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * PSA graded card prices by grade, recent sales and population report
   *
   * @remarks
   * For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual
   * sales with grading company, grade and cert number, the population report with gem rate, and a
   * price summary. Send specId from /v1/psa/search, or a keyword and the best match is used (others
   * listed in otherMatches). One successful call uses one request; a card PSA does not have returns
   * 404 not_found and is not charged.
   *
   * @returns Prices by grade, sales and population
   *
   * @throws {@link Psa.GetPsaCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPsaCard(
    request: Psa.GetPsaCardRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PsaCardResponse, Psa.GetPsaCardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/psa/card"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "specId", value: request.specId, schema: s.optional(s.string()) },
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "timeRange", value: request.timeRange, schema: s.defaulted(s.int(), 0) },
          { name: "grade", value: request.grade, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: v1PsaCardResponseSchema },
        errorFactory: Psa.GetPsaCardError,
      },
      options,
    );
  }

  /**
   * PSA population of every card in a set, by grade
   *
   * @remarks
   * One call returns every card in a PSA set with its number, name, variety, specId and population
   * for every grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send
   * headingId from /v1/psa/sets or the set's PSA population page url. Large sets can take 10 to 20
   * seconds.
   *
   * @returns Set population
   *
   * @throws {@link Psa.GetPsaSetPopulationError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPsaSetPopulation(
    request: Psa.GetPsaSetPopulationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PsaSetResponse, Psa.GetPsaSetPopulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/psa/set"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "headingId", value: request.headingId, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: v1PsaSetResponseSchema },
        errorFactory: Psa.GetPsaSetPopulationError,
      },
      options,
    );
  }

  /**
   * Find PSA sets or list every set for a game
   *
   * @remarks
   * Send a game to list every PSA set for that game, newest first and paged; add keyword or year to
   * narrow it. Without game, keyword searches set names across all games. Each set has the
   * headingId used by /v1/psa/set.
   *
   * @returns PSA sets
   *
   * @throws {@link Psa.ListPsaSetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPsaSets(
    request: Psa.ListPsaSetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PsaSetsResponse, Psa.ListPsaSetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/psa/sets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "game", value: request.game, schema: s.optional(s.lazy(() => gameSchema)) },
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "year", value: request.year, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 25) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
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
        success: { kind: "json", schema: v1PsaSetsResponseSchema },
        errorFactory: Psa.ListPsaSetsError,
      },
      options,
    );
  }

  /**
   * Find a PSA graded card and its specId
   *
   * @remarks
   * Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has
   * the specId used by /v1/psa/card. One successful call uses one request.
   *
   * @returns Matching PSA cards
   *
   * @throws {@link Psa.SearchPsaCardsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPsaCards(
    request: Psa.SearchPsaCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PsaSearchResponse, Psa.SearchPsaCardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/psa/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
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
        success: { kind: "json", schema: v1PsaSearchResponseSchema },
        errorFactory: Psa.SearchPsaCardsError,
      },
      options,
    );
  }
}

export namespace Psa {
  export type GetPsaCardRequest = {
    specId?: string;
    keyword?: string;
    /** @default 10 */
    count?: number;
    /** @default 0 */
    timeRange?: number;
    grade?: string;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getPsaCardRequestSchema: Schema<GetPsaCardRequest> = s.lazySchema(() =>
    s.object<GetPsaCardRequest>({
      specId: s.optional(s.string().check(s.pattern("^\\d{1,12}$"))),
      keyword: s.optional(s.string().check(s.maxLength(200))),
      count: s.defaulted(s.int().check(s.gte(0), s.lte(50)), 10),
      timeRange: s.defaulted(s.int().check(s.gte(0), s.lte(120)), 0),
      grade: s.optional(s.string()),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetPsaCardError extends ApiError {
    declare readonly payload:
      | Declared<"v1PsaCard400Error1", V1PsaCard400Error1>
      | Declared<"v1PsaCard401Error1", V1PsaCard401Error1>
      | Declared<"v1PsaCard429Error1", V1PsaCard429Error1>
      | Declared<"v1PsaCard502Error1", V1PsaCard502Error1>
      | Declared<"v1PsaCard503Error1", V1PsaCard503Error1>
      | Declared<"v1PsaCard404Error1", V1PsaCard404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPsaCardError> = [
      { on: 400, kind: "v1PsaCard400Error1", decode: { kind: "json", schema: v1PsaCard400Error1Schema } },
      { on: 401, kind: "v1PsaCard401Error1", decode: { kind: "json", schema: v1PsaCard401Error1Schema } },
      { on: 429, kind: "v1PsaCard429Error1", decode: { kind: "json", schema: v1PsaCard429Error1Schema } },
      { on: 502, kind: "v1PsaCard502Error1", decode: { kind: "json", schema: v1PsaCard502Error1Schema } },
      { on: 503, kind: "v1PsaCard503Error1", decode: { kind: "json", schema: v1PsaCard503Error1Schema } },
      { on: 404, kind: "v1PsaCard404Error1", decode: { kind: "json", schema: v1PsaCard404Error1Schema } },
    ];
  }

  export type GetPsaSetPopulationRequest = {
    headingId?: string;
    url?: string;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getPsaSetPopulationRequestSchema: Schema<GetPsaSetPopulationRequest> = s.lazySchema(() =>
    s.object<GetPsaSetPopulationRequest>({
      headingId: s.optional(s.string().check(s.pattern("^\\d{1,12}$"))),
      url: s.optional(s.string()),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetPsaSetPopulationError extends ApiError {
    declare readonly payload:
      | Declared<"v1PsaSet400Error1", V1PsaSet400Error1>
      | Declared<"v1PsaSet401Error1", V1PsaSet401Error1>
      | Declared<"v1PsaSet429Error1", V1PsaSet429Error1>
      | Declared<"v1PsaSet502Error1", V1PsaSet502Error1>
      | Declared<"v1PsaSet503Error1", V1PsaSet503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPsaSetPopulationError> = [
      { on: 400, kind: "v1PsaSet400Error1", decode: { kind: "json", schema: v1PsaSet400Error1Schema } },
      { on: 401, kind: "v1PsaSet401Error1", decode: { kind: "json", schema: v1PsaSet401Error1Schema } },
      { on: 429, kind: "v1PsaSet429Error1", decode: { kind: "json", schema: v1PsaSet429Error1Schema } },
      { on: 502, kind: "v1PsaSet502Error1", decode: { kind: "json", schema: v1PsaSet502Error1Schema } },
      { on: 503, kind: "v1PsaSet503Error1", decode: { kind: "json", schema: v1PsaSet503Error1Schema } },
    ];
  }

  export type ListPsaSetsRequest = {
    game?: Game;
    keyword?: string;
    year?: string;
    /** @default 25 */
    count?: number;
    /** @default 1 */
    page?: number;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const listPsaSetsRequestSchema: Schema<ListPsaSetsRequest> = s.lazySchema(() =>
    s.object<ListPsaSetsRequest>({
      game: s.optional(s.lazy(() => gameSchema)),
      keyword: s.optional(s.string().check(s.minLength(2), s.maxLength(120))),
      year: s.optional(s.string().check(s.pattern("^\\d{4}$"))),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
      page: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 1),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class ListPsaSetsError extends ApiError {
    declare readonly payload:
      | Declared<"v1PsaSets400Error1", V1PsaSets400Error1>
      | Declared<"v1PsaSets401Error1", V1PsaSets401Error1>
      | Declared<"v1PsaSets429Error1", V1PsaSets429Error1>
      | Declared<"v1PsaSets502Error1", V1PsaSets502Error1>
      | Declared<"v1PsaSets503Error1", V1PsaSets503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPsaSetsError> = [
      { on: 400, kind: "v1PsaSets400Error1", decode: { kind: "json", schema: v1PsaSets400Error1Schema } },
      { on: 401, kind: "v1PsaSets401Error1", decode: { kind: "json", schema: v1PsaSets401Error1Schema } },
      { on: 429, kind: "v1PsaSets429Error1", decode: { kind: "json", schema: v1PsaSets429Error1Schema } },
      { on: 502, kind: "v1PsaSets502Error1", decode: { kind: "json", schema: v1PsaSets502Error1Schema } },
      { on: 503, kind: "v1PsaSets503Error1", decode: { kind: "json", schema: v1PsaSets503Error1Schema } },
    ];
  }

  export type SearchPsaCardsRequest = {
    keyword: string;
    /** @default 10 */
    count?: number;
    /** @default 1 */
    page?: number;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const searchPsaCardsRequestSchema: Schema<SearchPsaCardsRequest> = s.lazySchema(() =>
    s.object<SearchPsaCardsRequest>({
      keyword: s.string().check(s.maxLength(200)),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 10),
      page: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 1),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class SearchPsaCardsError extends ApiError {
    declare readonly payload:
      | Declared<"v1PsaSearch400Error1", V1PsaSearch400Error1>
      | Declared<"v1PsaSearch401Error1", V1PsaSearch401Error1>
      | Declared<"v1PsaSearch429Error1", V1PsaSearch429Error1>
      | Declared<"v1PsaSearch502Error1", V1PsaSearch502Error1>
      | Declared<"v1PsaSearch503Error1", V1PsaSearch503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPsaCardsError> = [
      { on: 400, kind: "v1PsaSearch400Error1", decode: { kind: "json", schema: v1PsaSearch400Error1Schema } },
      { on: 401, kind: "v1PsaSearch401Error1", decode: { kind: "json", schema: v1PsaSearch401Error1Schema } },
      { on: 429, kind: "v1PsaSearch429Error1", decode: { kind: "json", schema: v1PsaSearch429Error1Schema } },
      { on: 502, kind: "v1PsaSearch502Error1", decode: { kind: "json", schema: v1PsaSearch502Error1Schema } },
      { on: 503, kind: "v1PsaSearch503Error1", decode: { kind: "json", schema: v1PsaSearch503Error1Schema } },
    ];
  }
}
