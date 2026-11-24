import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { cacheUsageSchema, type CacheUsage } from "../models/cache-usage.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Analytics endpoints provide usage metrics for Launch projects such as cache revalidation quota
 * consumption.
 */
export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get cache revalidation usage
   *
   * @remarks
   * Retrieves the organization's current cache revalidation quota usage, showing how many
   * revalidation requests have been used against the organization's plan limit.
   *
   * @returns Cache revalidation usage metrics.
   *
   * @throws {@link Analytics.GetCacheRevalidationUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCacheRevalidationUsage(
    options?: RequestOptions,
  ): ApiPromise<CacheUsage, Analytics.GetCacheRevalidationUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/cache-revalidation-usage"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cacheUsageSchema },
        errorFactory: Analytics.GetCacheRevalidationUsageError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export class GetCacheRevalidationUsageError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCacheRevalidationUsageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
