import type { OAuth2AuthorizationCodeCredentials, OAuth2ClientCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly mcp?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly mcpStrategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
  readonly oAuth2?: OAuth2ClientCredentials | undefined;
  readonly oAuth2Strategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /** OneRoster API */
    default?: {
      baseUrl?: string;
    };
    /** OneRoster API */
    authServer?: {
      baseUrl?: string;
    };
  };
};
