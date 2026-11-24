import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * A personal access token allows access to the api for the user who created it. This should be
   * kept a secret and be treated like a password.
   *
   * @remarks
   * Unset, it is read from `ASANA_PERSONAL_ACCESS_TOKEN`.
   */
  readonly personalAccessToken?: SecretProvider | undefined;
  /**
   * We require that applications designed to access the Asana API on behalf of multiple users
   * implement OAuth 2.0. Asana supports the Authorization Code Grant flow.
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
  readonly serverOptions?: {
    /** Main endpoint. */
    default?: {
      baseUrl?: string;
    };
    /** Main endpoint. */
    authServer?: {
      baseUrl?: string;
    };
  };
};
