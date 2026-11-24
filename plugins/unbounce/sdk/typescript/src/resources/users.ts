import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { usersResponseInternalSchema, type UsersResponse } from "../models/users-response.js";
import type { Servers } from "../servers.js";

/**
 * Users in the account
 */
export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List users
   *
   * @returns User collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsers(options?: RequestOptions): ApiPromise<UsersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
