import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkDatasourceAuthResponseSchema,
  type CheckDatasourceAuthResponse,
} from "../models/check-datasource-auth-response.js";
import {
  createAuthTokenResponseSchema,
  type CreateAuthTokenResponse,
} from "../models/create-auth-token-response.js";
import type { Servers } from "../servers.js";

export class Authentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check datasource authorization
   *
   * @remarks
   * Returns all datasource instances that require per-user OAuth authorization for the
   * authenticated user, along with a transient auth token that can be appended to auth URLs to
   * complete OAuth flows.
   *
   * Clients construct the full OAuth URL by combining the backend base URL, the
   * `authUrlRelativePath` from each instance, and the transient auth token:
   * `<backend>/<authUrlRelativePath>?transient_auth_token=<token>`.
   *
   * @returns OK
   *
   * @throws {@link Authentication.CheckdatasourceauthError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkdatasourceauth(
    request: Authentication.CheckdatasourceauthRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckDatasourceAuthResponse, Authentication.CheckdatasourceauthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/checkdatasourceauth"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkDatasourceAuthResponseSchema },
        errorFactory: Authentication.CheckdatasourceauthError,
      },
      options,
    );
  }

  /**
   * Create authentication token
   *
   * @remarks
   * Creates an authentication token for the authenticated user. These are specifically intended to
   * be used with the [Web SDK](https://developers.glean.com/web).
   *
   * Note: The tokens generated from this endpoint are **not** valid tokens for use with the Client
   * API (e.g. `/rest/api/v1/*`).
   *
   * @returns OK
   *
   * @throws {@link Authentication.CreateauthtokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createauthtoken(
    request: Authentication.CreateauthtokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAuthTokenResponse, Authentication.CreateauthtokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/createauthtoken"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createAuthTokenResponseSchema },
        errorFactory: Authentication.CreateauthtokenError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export type CheckdatasourceauthRequest = {
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class CheckdatasourceauthError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CheckdatasourceauthError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateauthtokenRequest = {
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class CreateauthtokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateauthtokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
