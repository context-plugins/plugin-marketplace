import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { collaborationInternalSchema, type Collaboration } from "../models/collaboration.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { userInternalSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving information about the authenticated user.
 */
export class UserApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List collaborations
   *
   * @remarks
   * Returns a list of organizations and accounts the current user collaborates with.
   *
   * @returns Successfully retrieved collaborations
   *
   * @throws {@link UserApi.GetCollaborationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCollaborations(options?: RequestOptions): ApiPromise<Collaboration[], UserApi.GetCollaborationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/collaborations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => collaborationInternalSchema)) },
        errorFactory: UserApi.GetCollaborationsError,
      },
      options,
    );
  }

  /**
   * Get authenticated user
   *
   * @remarks
   * Returns information about the currently authenticated user, including name, login, and avatar
   * URL.
   *
   * @returns Successfully retrieved user information
   *
   * @throws {@link UserApi.GetCurrentUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentUser(options?: RequestOptions): ApiPromise<User, UserApi.GetCurrentUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userInternalSchema },
        errorFactory: UserApi.GetCurrentUserError,
      },
      options,
    );
  }
}

export namespace UserApi {
  export class GetCollaborationsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCollaborationsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCurrentUserError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentUserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
