import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Benchmarks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Benchmarks
   *
   * @remarks
   * Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Benchmarks.BenchmarksBenchmarksGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  benchmarksBenchmarksGet(
    request: Benchmarks.BenchmarksBenchmarksGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Benchmarks.BenchmarksBenchmarksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/benchmarks"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "window_hours", value: request.windowHours, schema: s.defaulted(s.int(), 24) }],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Benchmarks.BenchmarksBenchmarksGetError,
      },
      options,
    );
  }

  /**
   * Benchmarks History
   *
   * @remarks
   * The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and
   * never prunes, so it cannot be backfilled by anyone. Built for quant / eval / research use. Free
   * keys get a 7-day sample; paid plans get the full history. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  benchmarksHistoryBenchmarksHistoryGet(
    request: Benchmarks.BenchmarksHistoryBenchmarksHistoryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/benchmarks/history"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "provider", value: request.provider, schema: s.optional(s.string()) },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 90) },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError,
      },
      options,
    );
  }
}

export namespace Benchmarks {
  export type BenchmarksBenchmarksGetRequest = {
    /** rolling window in hours @default 24 */
    windowHours?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const benchmarksBenchmarksGetRequestSchema: Schema<BenchmarksBenchmarksGetRequest> = s.lazySchema(
    () =>
      s.object<BenchmarksBenchmarksGetRequest>({
        windowHours: s.defaulted(s.int().check(s.gte(1), s.lte(720)), 24),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
  );

  export class BenchmarksBenchmarksGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BenchmarksBenchmarksGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type BenchmarksHistoryBenchmarksHistoryGetRequest = {
    /** filter to one provider, e.g. openai (optional) */
    provider?: string;
    /** lookback in days @default 90 */
    days?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const benchmarksHistoryBenchmarksHistoryGetRequestSchema: Schema<BenchmarksHistoryBenchmarksHistoryGetRequest> =
    s.lazySchema(() =>
      s.object<BenchmarksHistoryBenchmarksHistoryGetRequest>({
        provider: s.optional(s.string()),
        days: s.defaulted(s.int().check(s.gte(1), s.lte(1825)), 90),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class BenchmarksHistoryBenchmarksHistoryGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BenchmarksHistoryBenchmarksHistoryGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
