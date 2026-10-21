import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  oAuthUserInfoResponseSchema,
  type OAuthUserInfoResponse,
} from "../models/oauth-user-info-response.js";
import type { Servers } from "../servers.js";

/**
 * OpenID Connect 1.0 endpoints for identity federation and discovery.
 *
 * **Discovery:**
 * - `/.well-known/openid-configuration` - Authorization server metadata
 * - `/.well-known/oauth-authorization-server` - Authorization server metadata (RFC 8414)
 * - `/.well-known/oauth-protected-resource/mcp` - Protected resource metadata (RFC 9728)
 * - `/.well-known/jwks.json` - Public keys for token verification
 *
 * **UserInfo:**
 * - `/oauth2/userinfo` - Get authenticated user's profile information
 *
 * **Supported Claims:**
 * - `user_id` - User identifier
 * - `email`, `email_verified` - Email information
 * - `name`, `given_name`, `family_name` - Name information
 */
export class OpenIdConnect {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get authenticated user information
   *
   * @remarks
   * OpenID Connect UserInfo Endpoint.
   *
   * Returns claims about the authenticated user. Requires a valid access token with the `openid`
   * scope.
   *
   * **Available Claims:**
   * - `user_id` - User identifier
   * - `name`, `given_name`, `family_name` - Name claims (with `profile` scope)
   * - `email`, `email_verified` - Email claims (with `email` scope)
   *
   * **Authentication:** Pass the access token as a Bearer token: `Authorization: Bearer
   * {access_token}`
   *
   * @returns User information
   *
   * @throws {@link OpenIdConnect.OauthUserInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthUserInfo(
    options?: RequestOptions,
  ): ApiPromise<OAuthUserInfoResponse, OpenIdConnect.OauthUserInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth2/userinfo"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthUserInfoResponseSchema },
        errorFactory: OpenIdConnect.OauthUserInfoError,
      },
      options,
    );
  }
}

export namespace OpenIdConnect {
  export class OauthUserInfoError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<OauthUserInfoError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
