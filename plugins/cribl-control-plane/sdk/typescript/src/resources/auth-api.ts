import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authTokenModelSchema, type AuthTokenModel } from "../models/auth-token-model.js";
import { errorSchema, type Error } from "../models/error.js";
import { loginInfoSchema, type LoginInfo } from "../models/login-info.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to authentication. Do not use the /auth endpoints in Cribl.Cloud deployments.
 * Instead, follow the instructions at https://docs.cribl.io/stream/api-tutorials/#criblcloud to
 * authenticate for Cribl.Cloud.
 */
export class AuthApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Log in and fetch an authentication token
   *
   * @remarks
   * This endpoint is unavailable on Cribl.Cloud. Instead, follow the instructions at
   * https://docs.cribl.io/stream/api-tutorials/#criblcloud to get an Auth token for Cribl.Cloud.
   *
   * @returns Authentication token
   *
   * @throws {@link AuthApi.CreateAuthLoginError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAuthLogin(
    request: AuthApi.CreateAuthLoginRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthTokenModel, AuthApi.CreateAuthLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/login"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: loginInfoSchema },
      },
      {
        success: { kind: "json", schema: authTokenModelSchema },
        errorFactory: AuthApi.CreateAuthLoginError,
      },
      options,
    );
  }
}

export namespace AuthApi {
  export type CreateAuthLoginRequest = {
    /** LoginInfo object. */
    body: LoginInfo;
  };

  export class CreateAuthLoginError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error429", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAuthLoginError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
