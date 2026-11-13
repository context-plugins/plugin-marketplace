import type { OAuth2AuthorizationCodeCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Access to the Grist API is controlled by an Authorization header, which should contain the word
   * 'Bearer', followed by a space, followed by your API key.
   */
  readonly apiKey?: TokenProvider | undefined;
  /**
   * Access tokens issued by Grist's OAuth server. Tokens are passed in the `Authorization: Bearer`
   * header, the same way as an API key, but are scoped to the documents and permissions granted by
   * the user to the app. Tokens are opaque and start with `grist_at_` prefix. See [OAuth
   * apps](../oauth-apps/) for details.
   *
   * Endpoints may be discovered at `/.well-known/oauth-authorization-server`. Endpoints below are
   * for getgrist.com.
   */
  readonly oAuth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oAuth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
      /**
       * Grist host: docs.getgrist.com for a personal site, <team>.getgrist.com for a team site, or
       * your self-hosted domain
       *
       * @default "docs.getgrist.com"
       */
      gristhost?: string;
    };
    authServer?: {
      baseUrl?: string;
    };
  };
};
