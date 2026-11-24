import type { BasicAuthCredentials, OAuth2AuthorizationCodeCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * HTTP Basic auth using the Unbounce API key as the username.
   *
   * @remarks
   * Unset, it is read from `UNBOUNCE_API_KEY_AUTH_USERNAME` and `UNBOUNCE_API_KEY_AUTH_PASSWORD`.
   */
  readonly apiKeyAuth?: BasicAuthCredentials | undefined;
  /**
   * OAuth 2.0 Authorization Code (granted case-by-case by Unbounce).
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
  /** Unbounce REST API */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
