import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1MeResponseInternalSchema, type V1MeResponse } from "../models/v1-me-response.js";
import { v1UsageResponseSchema, type V1UsageResponse } from "../models/v1-usage-response.js";
import type { Servers } from "../servers.js";

export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get account and plan
   *
   * @remarks
   * Return the authenticated account, plan summary, and credit balance. Control-plane endpoint —
   * free.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMe(options?: RequestOptions): ApiPromise<V1MeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/me"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MeResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List recent usage rows
   *
   * @remarks
   * Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint
   * — free.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsage(
    request: Account.GetUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1UsageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "since", value: request.since, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UsageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Account {
  export type GetUsageRequest = {
    /** Return rows with created_at >= this ISO timestamp. */
    since?: Date;
    /** Page size (max 1000). @default 100 */
    limit?: number;
  };

  export const getUsageRequestSchema: Schema<GetUsageRequest> = s.lazySchema(() =>
    s.object<GetUsageRequest>({
      since: s.optional(s.dateTime()),
      limit: s.defaulted(s.int().check(s.lte(1000)), 100),
    }),
  );
}
