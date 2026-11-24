import type {
  BasicAuthCredentials,
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * HTTP Basic authentication using your Razorpay API key pair. Use key_id as the username and
   * key_secret as the password. Encode as Base64(key_id:key_secret). Keys are environment-scoped
   * (Test vs Live). Obtain keys at https://dashboard.razorpay.com/app/keys. Keys are
   * case-sensitive.
   *
   * @remarks
   * Unset, it is read from `CURLEC_BASIC_AUTH_USERNAME` and `CURLEC_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
  /**
   * OAuth 2.0 via the Razorpay MCP server (mcp.razorpay.com). Supports Authorization Code with PKCE
   * (S256) for user-delegated access and Client Credentials for server-to-server access. Tokens
   * expire in 3600 seconds. Dynamic Client Registration available at the registration endpoint. For
   * integration setup see https://razorpay.com/docs/build/llm-docs/mcp-server/oauth.md.
   *
   * @remarks
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly oauth2AuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2AuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  /**
   * OAuth 2.0 via the Razorpay MCP server (mcp.razorpay.com). Supports Authorization Code with PKCE
   * (S256) for user-delegated access and Client Credentials for server-to-server access. Tokens
   * expire in 3600 seconds. Dynamic Client Registration available at the registration endpoint. For
   * integration setup see https://razorpay.com/docs/build/llm-docs/mcp-server/oauth.md.
   *
   * @remarks
   * Each call requests the scopes its operation declares, and a token is cached per scope set.
   * Setting `scope` requests that one value for every call and keeps a single token.
   *
   * Unset, it is read from `CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID`,
   * `CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET` and `CURLEC_OAUTH2_CLIENT_CREDENTIALS_SCOPE`.
   */
  readonly oauth2ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth2ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
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
