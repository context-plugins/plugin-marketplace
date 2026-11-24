import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import {
  authenticatedUserResponseSchema,
  type AuthenticatedUserResponse,
} from "../models/authenticated-user-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve information about the currently authenticated user and their workspace.
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
   * Get Authenticated User
   *
   * @remarks
   * Get information about the authenticated user and their workspace.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetAuthenticatedUser(
    options?: RequestOptions,
  ): ApiPromise<AuthenticatedUserResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/me"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authenticatedUserResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
