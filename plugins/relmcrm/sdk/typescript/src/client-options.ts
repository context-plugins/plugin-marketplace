import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Workspace-scoped API key. relm_live_... (live) or relm_test_... (free, isolated test mode).
   * Mint at https://app.relmcrm.com/.
   *
   * @remarks
   * Unset, it is read from `RELM_CRM_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * OAuth 2.1 with PKCE (S256) and dynamic client registration (RFC 7591). Live mode only; test
   * mode is API-key only. Discovery: /.well-known/oauth-authorization-server.
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
    /** Production */
    default?: {
      baseUrl?: string;
    };
    /** Production */
    authServer?: {
      baseUrl?: string;
    };
  };
};
