import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { currencySchema, type Currency } from "../models/currency.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { industrySchema, type Industry } from "../models/industry.js";
import { kindSchema, type Kind } from "../models/kind.js";
import { limitSchema, type Limit } from "../models/limit.js";
import { minSchema, type Min } from "../models/min.js";
import { sourceSchema, type Source } from "../models/source.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

export class Tenders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Public tenders in Poland (BZP + TED)
   *
   * @remarks
   * Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and
   * EU-threshold notices for Poland from TED — with contracting authority, value, deadlines and
   * (for awarded notices) the winner.
   *
   * @returns Page of tender notices.
   *
   * @throws {@link Tenders.GetTendersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTenders(
    request: Tenders.GetTendersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tenders.GetTendersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tenders"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "industry", value: request.industry, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.lazy(() => sourceSchema)) },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "postal", value: request.postal, schema: s.optional(s.string()) },
          { name: "kind", value: request.kind, schema: s.optional(s.lazy(() => kindSchema)) },
          { name: "value_min", value: request.valueMin, schema: s.optional(s.float64()) },
          { name: "value_max", value: request.valueMax, schema: s.optional(s.float64()) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currencySchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tenders.GetTendersError,
      },
      options,
    );
  }

  /**
   * Largest recent contract awards
   *
   * @remarks
   * Largest recent public contract awards in Poland with the winning company (KRS when matched).
   *
   * @returns Recent awards, largest first.
   *
   * @throws {@link Tenders.GetTendersAwardsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTendersAwards(
    request: Tenders.GetTendersAwardsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tenders.GetTendersAwardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tenders/awards"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "industry", value: request.industry, schema: s.optional(s.lazy(() => industrySchema)) },
          { name: "min", value: request.min, schema: s.optional(s.lazy(() => minSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tenders.GetTendersAwardsError,
      },
      options,
    );
  }
}

export namespace Tenders {
  export type GetTendersRequest = {
    /** Open tenders or awarded contracts. */
    status?: Status;
    /** CPV group or 2-digit CPV division. */
    industry?: string;
    /** National (BZP) or EU (TED) notices. */
    source?: Source;
    /** Voivodeship. */
    region?: string;
    /** City of the contracting authority. */
    city?: string;
    /** Postal code prefix. */
    postal?: string;
    /** Contract type. */
    kind?: Kind;
    /** Minimum estimated value (in `currency`). */
    valueMin?: number;
    /** Maximum estimated value (in `currency`). */
    valueMax?: number;
    /** Currency of value filters and returned values. */
    currency?: Currency;
    /** Page size. */
    limit?: Limit;
    /** Zero-based offset (max 2000). */
    offset?: number;
  };

  export class GetTendersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTendersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTendersAwardsRequest = {
    /** Industry filter. */
    industry?: Industry;
    /** Minimum contract value in PLN (default 1000000). */
    min?: Min;
  };

  export class GetTendersAwardsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTendersAwardsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
