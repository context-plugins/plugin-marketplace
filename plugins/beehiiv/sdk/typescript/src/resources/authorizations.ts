import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { codeChallengeMethodSchema, type CodeChallengeMethod } from "../models/code-challenge-method.js";
import { oAuthErrorSchema, type OAuthError } from "../models/oauth-error.js";
import type { Servers } from "../servers.js";

export class Authorizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Authorize
   *
   * @remarks
   * Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and
   * consent (if needed), then redirects back to your `redirect_uri` with a `code` and `state`.
   *
   * @throws {@link Authorizations.AuthorizeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorize(
    request: Authorizations.AuthorizeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Authorizations.AuthorizeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultOAuth2AuthorizationsApi("/oauth/authorize"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "client_id", value: request.clientId, schema: s.string() },
          { name: "redirect_uri", value: request.redirectUri, schema: s.string() },
          { name: "response_type", value: request.responseType, schema: s.string() },
          { name: "scope", value: request.scope, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "code_challenge", value: request.codeChallenge, schema: s.optional(s.string()) },
          {
            name: "code_challenge_method",
            value: request.codeChallengeMethod,
            schema: s.optional(s.lazy(() => codeChallengeMethodSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Authorizations.AuthorizeError,
      },
      options,
    );
  }
}

export namespace Authorizations {
  export type AuthorizeRequest = {
    /** The OAuth application client ID (`uid`). */
    clientId: string;
    /** Must exactly match one of the app's configured redirect URIs. */
    redirectUri: string;
    /** Must be `code` for the authorization code flow. */
    responseType: string;
    /** Space-delimited list of requested scopes. */
    scope?: string;
    /** Opaque value returned to your callback for CSRF protection. */
    state?: string;
    /** PKCE code challenge. Required for public clients. */
    codeChallenge?: string;
    /** PKCE challenge method (`plain` or `S256`). Required for public clients when using PKCE. */
    codeChallengeMethod?: CodeChallengeMethod;
  };

  export class AuthorizeError extends ApiError {
    declare readonly payload:
      | Declared<"error302", Record<string, unknown>>
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeError> = [
      { on: 302, kind: "error302", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 400, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 401, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }
}
