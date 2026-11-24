import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  getApiV1ProxiesUserRequestsBandwidthResponseSchema,
  type GetApiV1ProxiesUserRequestsBandwidthResponse,
} from "../models/get-api-v1-proxies-user-requests-bandwidth-response.js";
import type { Servers } from "../servers.js";

export class Proxies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * GET /api/v1/proxies/user/requests-bandwidth
   *
   * @returns Success (shape read from the example response on the page)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ProxiesUserRequestsBandwidth(
    request: Proxies.GetApiV1ProxiesUserRequestsBandwidthRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetApiV1ProxiesUserRequestsBandwidthResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/proxies/user/requests-bandwidth"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getApiV1ProxiesUserRequestsBandwidthResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Proxies {
  export type GetApiV1ProxiesUserRequestsBandwidthRequest = {
    endDate?: string;
    startDate?: string;
  };
}
