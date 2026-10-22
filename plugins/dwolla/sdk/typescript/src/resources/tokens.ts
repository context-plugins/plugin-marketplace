import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import { token401Error1Schema, type Token401Error1 } from "../models/token401-error1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Application Access Tokens
 */
export class Tokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an application access token
   *
   * @remarks
   * Generate an application access token using OAuth 2.0 client credentials flow for
   * server-to-server authentication. Requires client ID and secret sent via Basic authentication
   * header with grant_type=client_credentials in the request body. Returns a bearer access token
   * with expiration time for authenticating API requests scoped to your application. Essential for
   * secure API access.
   *
   * @returns successful operation
   *
   * @throws {@link Tokens.CreateApplicationAccessTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApplicationAccessToken(
    request: Tokens.CreateApplicationAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Tokens.CreateApplicationAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/token"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "grant_type", value: request.grantType, schema: grantTypeSchema }],
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Tokens.CreateApplicationAccessTokenError,
      },
      options,
    );
  }
}

export namespace Tokens {
  export type CreateApplicationAccessTokenRequest = {
    /** Must be set to "client_credentials" */
    grantType: GrantType;
  };

  export class CreateApplicationAccessTokenError extends ApiError {
    declare readonly payload: Declared<"token401Error1", Token401Error1> | Undeclared;

    static readonly errors: ErrorDecoders<CreateApplicationAccessTokenError> = [
      { on: 401, kind: "token401Error1", decode: { kind: "json", schema: token401Error1Schema } },
    ];
  }
}
