import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { tokenRequestSchema, type TokenRequest } from "../models/token-request.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for obtaining and managing OAuth 2.0 access tokens used to authenticate API requests.
 */
export class Authentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Generate an access token
   *
   * @remarks
   * Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours
   * and must be included as a Bearer token in all subsequent API requests. During the validity
   * period, reuse the same token rather than generating a new one.
   *
   * @returns Access token generated successfully
   *
   * @throws {@link Authentication.GenerateAccessTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateAccessToken(
    request: Authentication.GenerateAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Authentication.GenerateAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/oauth/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tokenRequestSchema },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Authentication.GenerateAccessTokenError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export type GenerateAccessTokenRequest = {
    body: TokenRequest;
  };

  export class GenerateAccessTokenError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GenerateAccessTokenError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
