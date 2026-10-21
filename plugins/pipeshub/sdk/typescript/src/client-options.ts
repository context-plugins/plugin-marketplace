import type {
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  TokenProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * JWT Bearer token for authenticated requests.
   *
   * A personal access token (see the **Personal Access Tokens** tag) is a `phpat_`-prefixed variant
   * of this same JWT — e.g. `phpat_eyJhbGci...`. The prefix is display-only, added for
   * secret-scanner detectability; the gateway strips it before verifying the token, so send it
   * exactly as issued, prefix included.
   */
  readonly bearerAuth?: TokenProvider | undefined;
  /**
   * Scoped JWT token for service-to-service authentication. Format: "Bearer {scoped_token}"
   * Required scopes vary by endpoint.
   */
  readonly scopedToken?: TokenProvider | undefined;
  /**
   * OAuth 2.0 authentication with fine-grained scopes. Supports authorization_code (with PKCE) and
   * client_credentials flows. OAuth tokens are Bearer JWTs — use the same Authorization header as
   * regular tokens. For **client_credentials**, machine JWTs may use `userId === client_id`; the
   * Node gateway resolves the OAuth app creator — see **OAuth Provider** tag.
   */
  readonly oauth2AuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2AuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  /**
   * OAuth 2.0 authentication with fine-grained scopes. Supports authorization_code (with PKCE) and
   * client_credentials flows. OAuth tokens are Bearer JWTs — use the same Authorization header as
   * regular tokens. For **client_credentials**, machine JWTs may use `userId === client_id`; the
   * Node gateway resolves the OAuth app creator — see **OAuth Provider** tag.
   */
  readonly oauth2ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth2ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Base API URL */
      readonly serverOptions?: {
        baseUrl?: string;
        /** Base server URL (without /api/v1) @default "https://app.pipeshub.com" */
        instanceUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Base API URL */
      readonly serverOptions?: {
        baseUrl?: string;
        /** Base server URL @default "https://app.pipeshub.com" */
        instanceUrl?: string;
      };
    };
