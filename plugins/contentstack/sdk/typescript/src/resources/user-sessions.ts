import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import { loginRequestInternalSchema, type LoginRequest } from "../models/login-request.js";
import { loginResponseInternalSchema, type LoginResponse } from "../models/login-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for authenticating users and managing session tokens within Contentstack.
 */
export class UserSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Log in a user
   *
   * @remarks
   * Authenticates a user with their email and password and returns an authtoken for use in
   * subsequent API requests. The authtoken is valid for the duration of the session.
   *
   * @returns Successful authentication with authtoken.
   *
   * @throws {@link UserSessions.LoginUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  loginUser(
    request: UserSessions.LoginUserRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginResponse, UserSessions.LoginUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/user-session"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: loginRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: loginResponseInternalSchema },
        errorFactory: UserSessions.LoginUserError,
      },
      options,
    );
  }

  /**
   * Log out a user
   *
   * @remarks
   * Invalidates the current user session and authtoken, signing the user out of all Contentstack
   * sessions.
   *
   * @returns Successfully logged out.
   *
   * @throws {@link UserSessions.LogoutUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  logoutUser(options?: RequestOptions): ApiPromise<undefined, UserSessions.LogoutUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/user-session"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserSessions.LogoutUserError,
      },
      options,
    );
  }
}

export namespace UserSessions {
  export type LoginUserRequest = {
    body: LoginRequest;
  };

  export class LoginUserError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<LoginUserError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export class LogoutUserError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<LogoutUserError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }
}
