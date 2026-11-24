import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Use the "Bearer <API_KEY>" format or sign in for autofill
   *
   * @remarks
   * Unset, it is read from `DOI_T_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
  /**
   * Customer (tenant) ID for the request. Separate from your API token: always authenticate with
   * `Authorization: Bearer <token>` (personal or service account). See [Get
   * Started](https://developer.doit.com/docs/start). Omit when your token is scoped to a single
   * customer (resolved automatically). A service account can select an active direct or nested
   * descendant of its home customer; the endpoint's normal permissions, entitlements, and
   * resource-ownership checks still apply. A service-account target outside that customer subtree
   * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter,
   * which only applies to legacy API keys and is ignored by personal and service account tokens.
   *
   * @remarks
   * Unset, it is read from `DOI_T_TENANT_ID`.
   */
  readonly tenantId?: SecretProvider | undefined;
  /**
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly oauth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    authServer?: {
      baseUrl?: string;
    };
    accessTokenServer?: {
      baseUrl?: string;
    };
  };
};
