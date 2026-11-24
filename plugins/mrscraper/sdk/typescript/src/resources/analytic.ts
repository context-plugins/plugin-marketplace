import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Analytic {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * GET /api/v1/analytic/statuses
   *
   * @returns Success (status as documented)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AnalyticStatuses(
    request: Analytic.GetApiV1AnalyticStatusesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytic/statuses"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "apiTokenName", value: request.apiTokenName, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Analytic {
  export type GetApiV1AnalyticStatusesRequest = {
    apiTokenName?: string;
    domain?: string;
    endDate?: string;
    startDate?: string;
  };
}
