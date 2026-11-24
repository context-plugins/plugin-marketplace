import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Sapling API key passed as the `key` query parameter, an alternative to the Authorization bearer
   * header.
   *
   * @remarks
   * Unset, it is read from `SAPLING_API_KEY_QUERY`.
   */
  readonly apiKeyQuery?: SecretProvider | undefined;
  /**
   * Sapling API key. Language-tool operations also accept an OAuth access token from the Sapling
   * authorization server — see the oauth2 scheme. The key may instead be sent as a `key` field in
   * the JSON body, which takes precedence when both are present.
   *
   * @remarks
   * Unset, it is read from `SAPLING_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * OAuth 2.1 authorization code flow with PKCE (S256). Clients may register dynamically (RFC 7591)
   * at https://api.sapling.ai/oauth/register; server metadata is at
   * https://api.sapling.ai/.well-known/oauth-authorization-server. The access token is sent as an
   * `Authorization: Bearer` header and is accepted only on the language-tool operations that
   * advertise OAuth security. Other authenticated operations require an API key.
   *
   * @remarks
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly oauth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions = {
  /** The deployment serving this document */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
