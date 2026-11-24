import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  error400OddsRelayServiceApiSchema,
  type Error400OddsRelayServiceApi,
} from "../models/error400-odds-relay-service-api.js";
import {
  error401OddsRelayServiceApiSchema,
  type Error401OddsRelayServiceApi,
} from "../models/error401-odds-relay-service-api.js";
import {
  error403OddsRelayServiceApiSchema,
  type Error403OddsRelayServiceApi,
} from "../models/error403-odds-relay-service-api.js";
import {
  error404OddsRelayServiceApiSchema,
  type Error404OddsRelayServiceApi,
} from "../models/error404-odds-relay-service-api.js";
import {
  error429OddsRelayServiceApiSchema,
  type Error429OddsRelayServiceApi,
} from "../models/error429-odds-relay-service-api.js";
import {
  error500OddsRelayServiceApiSchema,
  type Error500OddsRelayServiceApi,
} from "../models/error500-odds-relay-service-api.js";
import {
  error503OddsRelayServiceApiSchema,
  type Error503OddsRelayServiceApi,
} from "../models/error503-odds-relay-service-api.js";
import { healthSchema, type Health } from "../models/health.js";
import {
  statusOddsRelayServiceApiSchema,
  type StatusOddsRelayServiceApi,
} from "../models/status-odds-relay-service-api.js";
import { v2CoverageResponseSchema, type V2CoverageResponse } from "../models/unions/v2-coverage-response.js";
import type { Servers } from "../servers.js";

/**
 * Coverage, status, health, liveness and this document.
 */
export class Service {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Coverage per venue and sport
   *
   * @remarks
   * One document per region, in two views. **Keyless** (no `Authorization` and no `x-api-key`
   * header): per product, each (venue, sport) `live` or `interrupted_24h`, no counts and no times,
   * then `markets`: per product, the market keys it carries, each one a value its `markets` filter
   * takes now; the per-address shield only; `Cache-Control: public, max-age=60` and `Vary:
   * Authorization, X-Api-Key, Accept-Encoding` on a 200; `Access-Control-Allow-Origin: *` on every
   * reply, refusals and errors included. **Keyed** (either header present, even empty: an invalid
   * key is 401): your key's products the region serves, venues with rows now, their `events` and
   * `last_seen`; on an account with a scope, only its products and, per product, the venues and
   * sports it admits (markets are not applied: the document has no market grain; a scope that
   * cannot be applied is 503 `temporarily_unavailable`); free; the flood cap applies. Both:
   * `region` missing means `uk`, gzip over 1 kB unless refused, 503 until the first document is
   * built.
   *
   * @returns The keyless summary, or the keyed document.
   *
   * @throws {@link Service.GetCoverageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCoverage(
    request: Service.GetCoverageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V2CoverageResponse, Service.GetCoverageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/coverage"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader)),
        pathParams: [],
        query: [{ name: "region", value: request.region, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2CoverageResponseSchema },
        errorFactory: Service.GetCoverageError,
      },
      options,
    );
  }

  /**
   * Board freshness
   *
   * @remarks
   * Each board's `processed_at`, odds age (`age_s`) and event `count`, and a verdict: `degraded`
   * when a board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict.
   * Free. Plain JSON.
   *
   * @returns The boards.
   *
   * @throws {@link Service.GetHealthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHealth(options?: RequestOptions): ApiPromise<Health, Service.GetHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/health"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: Service.GetHealthError,
      },
      options,
    );
  }

  /**
   * Liveness, keyless
   *
   * @remarks
   * Is the service up. KEYLESS and before every other check. `text/plain`, `Cache-Control:
   * no-store`: the first line is `ok` (200) or `warming` (503), then how many boards can be served
   * and any that cannot. Liveness only: board freshness is `/v2/health` and `/v2/status`.
   *
   * @returns Up.
   *
   * @throws {@link Service.GetLivenessError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveness(options?: RequestOptions): ApiPromise<string, Service.GetLivenessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/healthz"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Service.GetLivenessError,
      },
      options,
    );
  }

  /**
   * This document, keyless
   *
   * @remarks
   * This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token
   * is spent. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match; gzip unless refused;
   * `Cache-Control: public, max-age=300`; `Access-Control-Allow-Origin: *` on every reply, refusals
   * and errors included. Takes no parameters.
   *
   * @returns This document.
   *
   * @throws {@link Service.GetOpenApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOpenApi(options?: RequestOptions): ApiPromise<Record<string, unknown>, Service.GetOpenApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/openapi.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Service.GetOpenApiError,
      },
      options,
    );
  }

  /**
   * Product status, keyless
   *
   * @remarks
   * Per product the region serves: `ok`, `slow` or `stale`, judged on each board's odds age (not
   * servable or not held is `stale`). While boards warm every product reads `stale` in a 200.
   * KEYLESS: the per-address shield only, a key header is ignored, no token is spent.
   * `Cache-Control: public, max-age=10` on a 200; `Access-Control-Allow-Origin: *` on every reply,
   * refusals and errors included. Plain JSON (never gzip).
   *
   * @returns The status.
   *
   * @throws {@link Service.GetStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStatus(
    request: Service.GetStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<StatusOddsRelayServiceApi, Service.GetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/status"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "region", value: request.region, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusOddsRelayServiceApiSchema },
        errorFactory: Service.GetStatusError,
      },
      options,
    );
  }
}

export namespace Service {
  export type GetCoverageRequest = {
    /**
     * ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route
     * only when your key covers `uk`, else 400 `region_required` naming a code your key has; on
     * discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase
     * code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404
     * `unknown_region`.
     */
    region?: string;
  };

  export class GetCoverageError extends ApiError {
    declare readonly payload:
      | Declared<"error400OddsRelayServiceApi", Error400OddsRelayServiceApi>
      | Declared<"error401OddsRelayServiceApi", Error401OddsRelayServiceApi>
      | Declared<"error403OddsRelayServiceApi", Error403OddsRelayServiceApi>
      | Declared<"error404OddsRelayServiceApi", Error404OddsRelayServiceApi>
      | Declared<"error429OddsRelayServiceApi", Error429OddsRelayServiceApi>
      | Declared<"error500OddsRelayServiceApi", Error500OddsRelayServiceApi>
      | Declared<"error503OddsRelayServiceApi", Error503OddsRelayServiceApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCoverageError> = [
      {
        on: 400,
        kind: "error400OddsRelayServiceApi",
        decode: { kind: "json", schema: error400OddsRelayServiceApiSchema },
      },
      {
        on: 401,
        kind: "error401OddsRelayServiceApi",
        decode: { kind: "json", schema: error401OddsRelayServiceApiSchema },
      },
      {
        on: 403,
        kind: "error403OddsRelayServiceApi",
        decode: { kind: "json", schema: error403OddsRelayServiceApiSchema },
      },
      {
        on: 404,
        kind: "error404OddsRelayServiceApi",
        decode: { kind: "json", schema: error404OddsRelayServiceApiSchema },
      },
      {
        on: 429,
        kind: "error429OddsRelayServiceApi",
        decode: { kind: "json", schema: error429OddsRelayServiceApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayServiceApi",
        decode: { kind: "json", schema: error500OddsRelayServiceApiSchema },
      },
      {
        on: 503,
        kind: "error503OddsRelayServiceApi",
        decode: { kind: "json", schema: error503OddsRelayServiceApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export class GetHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400OddsRelayServiceApi", Error400OddsRelayServiceApi>
      | Declared<"error401OddsRelayServiceApi", Error401OddsRelayServiceApi>
      | Declared<"error403OddsRelayServiceApi", Error403OddsRelayServiceApi>
      | Declared<"error429OddsRelayServiceApi", Error429OddsRelayServiceApi>
      | Declared<"error500OddsRelayServiceApi", Error500OddsRelayServiceApi>
      | Declared<"error503OddsRelayServiceApi", Error503OddsRelayServiceApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHealthError> = [
      {
        on: 400,
        kind: "error400OddsRelayServiceApi",
        decode: { kind: "json", schema: error400OddsRelayServiceApiSchema },
      },
      {
        on: 401,
        kind: "error401OddsRelayServiceApi",
        decode: { kind: "json", schema: error401OddsRelayServiceApiSchema },
      },
      {
        on: 403,
        kind: "error403OddsRelayServiceApi",
        decode: { kind: "json", schema: error403OddsRelayServiceApiSchema },
      },
      {
        on: 429,
        kind: "error429OddsRelayServiceApi",
        decode: { kind: "json", schema: error429OddsRelayServiceApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayServiceApi",
        decode: { kind: "json", schema: error500OddsRelayServiceApiSchema },
      },
      {
        on: 503,
        kind: "error503OddsRelayServiceApi",
        decode: { kind: "json", schema: error503OddsRelayServiceApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export class GetLivenessError extends ApiError {
    declare readonly payload: Declared<"error503", string> | Declared<"error502", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetLivenessError> = [
      { on: 503, kind: "error503", decode: { kind: "text", schema: s.string() } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export class GetOpenApiError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayServiceApi", Error400OddsRelayServiceApi>
      | Declared<"error429OddsRelayServiceApi", Error429OddsRelayServiceApi>
      | Declared<"error500OddsRelayServiceApi", Error500OddsRelayServiceApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOpenApiError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      {
        on: 400,
        kind: "error400OddsRelayServiceApi",
        decode: { kind: "json", schema: error400OddsRelayServiceApiSchema },
      },
      {
        on: 429,
        kind: "error429OddsRelayServiceApi",
        decode: { kind: "json", schema: error429OddsRelayServiceApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayServiceApi",
        decode: { kind: "json", schema: error500OddsRelayServiceApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export type GetStatusRequest = {
    /**
     * ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route
     * only when your key covers `uk`, else 400 `region_required` naming a code your key has; on
     * discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase
     * code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404
     * `unknown_region`.
     */
    region?: string;
  };

  export class GetStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400OddsRelayServiceApi", Error400OddsRelayServiceApi>
      | Declared<"error404OddsRelayServiceApi", Error404OddsRelayServiceApi>
      | Declared<"error429OddsRelayServiceApi", Error429OddsRelayServiceApi>
      | Declared<"error500OddsRelayServiceApi", Error500OddsRelayServiceApi>
      | Declared<"error502", undefined>
      | Declared<"error503OddsRelayServiceApi", Error503OddsRelayServiceApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStatusError> = [
      {
        on: 400,
        kind: "error400OddsRelayServiceApi",
        decode: { kind: "json", schema: error400OddsRelayServiceApiSchema },
      },
      {
        on: 404,
        kind: "error404OddsRelayServiceApi",
        decode: { kind: "json", schema: error404OddsRelayServiceApiSchema },
      },
      {
        on: 429,
        kind: "error429OddsRelayServiceApi",
        decode: { kind: "json", schema: error429OddsRelayServiceApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayServiceApi",
        decode: { kind: "json", schema: error500OddsRelayServiceApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      {
        on: 503,
        kind: "error503OddsRelayServiceApi",
        decode: { kind: "json", schema: error503OddsRelayServiceApiSchema },
      },
    ];
  }
}
