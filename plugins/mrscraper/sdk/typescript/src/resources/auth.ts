import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  subscriptionAccountsResponseSchema,
  type SubscriptionAccountsResponse,
} from "../models/subscription-accounts-response.js";
import type { Servers } from "../servers.js";

export class Auth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get subscription accounts
   *
   * @returns Account information; user.databaseConnectionString is empty without a valid backoffice
   * token
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionAccounts(
    request: Auth.GetSubscriptionAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SubscriptionAccountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/subscription-accounts"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "x-backoffice-token", value: request.xBackofficeToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionAccountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Auth {
  export type GetSubscriptionAccountsRequest = {
    /** Backoffice token to include database connection string */
    xBackofficeToken?: string;
  };
}
