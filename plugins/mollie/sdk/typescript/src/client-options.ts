import type {
  BasicAuthCredentials,
  OAuth2AuthorizationCodeCredentials,
  TokenProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Authenticates API requests for a single website profile. Each key targets either live mode
   * (`live_...`) or test mode (`test_...`).
   *
   * Keys are shown only once, at creation. Store the key securely — it cannot be retrieved
   * afterwards. If lost, create a new key under Developers → API access tokens in the Dashboard and
   * revoke the old one.
   */
  readonly apiKey?: TokenProvider | undefined;
  /**
   * Authenticates API requests with configurable permissions. Can access organization-level
   * resources and optionally scope to a specific payment profile (`access_...`). Use for advanced
   * integrations — such as bookkeeping or reporting tools — that need fine-grained control over API
   * access.
   *
   * Tokens are shown only once, at creation. Store it securely — it cannot be retrieved afterwards.
   * If lost, create a new token under Developers → API access tokens in the Dashboard and revoke
   * the old one.
   */
  readonly advancedAccessToken?: TokenProvider | undefined;
  readonly oAuth?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oAuthStrategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
  /**
   * Authenticates requests using HTTP Basic Authentication. Encode the credentials as `"Basic " +
   * toBase64(username + ":" + password)` and pass the result in the `Authorization` header.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    authServer?: {
      baseUrl?: string;
    };
  };
};
