import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { oAuthErrorSchema, type OAuthError } from "../models/oauth-error.js";
import {
  partnerOauthTokenRequestSchema,
  type PartnerOauthTokenRequest,
} from "../models/partner-oauth-token-request.js";
import {
  partnerOauthTokenResponseSchema,
  type PartnerOauthTokenResponse,
} from "../models/partner-oauth-token-response.js";
import type { Servers } from "../servers.js";

/**
 * Everything about authorizing calls to Flightdeck
 */
export class Authorization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Generate Flightdeck API access token
   *
   * @remarks
   * Use this API to generate an access token for use with the Flightdeck API. A valid access token
   * returned from this API is required in all other Flightdeck API calls.
   *
   * Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used
   * within the HTTP Authorization header as follows:
   *
   * `Authorization: Bearer `
   *
   * Note:
   * - The required `client_id` and `client_secret` are created by an admin via the dope console.
   * - Returned access tokens are valid for a limited time period. Clients must check the
   *   `expires_in` value in the response to generate a new access token before the current one
   *   expires.
   * - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes
   *   returned in the access token are set directly by the authorization server.
   *
   * @returns OK
   *
   * @throws {@link Authorization.GenerateAccessTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateAccessToken(
    request: Authorization.GenerateAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerOauthTokenResponse, Authorization.GenerateAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/partner/oauth/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerOauthTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerOauthTokenResponseSchema },
        errorFactory: Authorization.GenerateAccessTokenError,
      },
      options,
    );
  }
}

export namespace Authorization {
  export type GenerateAccessTokenRequest = {
    body: PartnerOauthTokenRequest;
  };

  export class GenerateAccessTokenError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Declared<"oAuthError3", OAuthError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateAccessTokenError> = [
      { on: 400, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 401, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 500, kind: "oAuthError3", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }
}
