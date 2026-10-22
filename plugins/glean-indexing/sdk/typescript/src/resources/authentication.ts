import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { rotateTokenResponseSchema, type RotateTokenResponse } from "../models/rotate-token-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage indexing API tokens.
 */
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
   * Rotate token
   *
   * @remarks
   * Rotates the secret value inside the Indexing API token and returns the new raw secret. All
   * other properties of the token are unchanged. In order to rotate the secret value, include the
   * token as the bearer token in the `/rotatetoken` request. Please refer to [Token
   * rotation](https://developers.glean.com/indexing/authentication/token-rotation) documentation
   * for more information.
   *
   * @returns OK
   *
   * @throws {@link Authentication.RotateTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  rotateToken(options?: RequestOptions): ApiPromise<RotateTokenResponse, Authentication.RotateTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/rotatetoken"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rotateTokenResponseSchema },
        errorFactory: Authentication.RotateTokenError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export class RotateTokenError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RotateTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
