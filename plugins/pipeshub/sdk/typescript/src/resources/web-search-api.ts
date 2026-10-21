import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { revealSchema, type Reveal } from "../models/reveal.js";
import {
  webSearchProvidersResponseSchema,
  type WebSearchProvidersResponse,
} from "../models/web-search-providers-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage web search providers (DuckDuckGo, Serper, Tavily, Exa) and settings for internet search.
 */
export class WebSearchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all web search providers
   *
   * @remarks
   * Retrieve all configured web search providers and current web search settings.
   *
   * **Authentication:** Session JWT or OAuth 2.0 access token via `Authorization: Bearer`. OAuth
   * tokens must include the `config:read` scope. Admin role is not required.
   *
   * **API keys:** for anyone who isn't an org admin, each provider's `configuration.apiKey` comes
   * back as the placeholder `****************`. Admins get the stored key, unless the server hides
   * secrets from everyone (`HIDE_SECRET_CONFIG=true`). When updating a provider, sending the
   * placeholder back keeps the stored key.
   *
   * @returns Web search providers and settings retrieved
   *
   * @throws {@link WebSearchApi.GetWebSearchProvidersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebSearchProviders(
    request: WebSearchApi.GetWebSearchProvidersRequest,
    options?: RequestOptions,
  ): ApiPromise<WebSearchProvidersResponse, WebSearchApi.GetWebSearchProvidersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/configurationManager/web-search"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [{ name: "reveal", value: request.reveal, schema: s.optional(s.lazy(() => revealSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webSearchProvidersResponseSchema },
        errorFactory: WebSearchApi.GetWebSearchProvidersError,
      },
      options,
    );
  }
}

export namespace WebSearchApi {
  export type GetWebSearchProvidersRequest = {
    /**
     * Set to `true` to receive stored secrets instead of placeholders. Honoured only for an admin's
     * own configuration where the deployment allows it (see `GET
     * /configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value.
     */
    reveal?: Reveal;
  };

  export class GetWebSearchProvidersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebSearchProvidersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
