import type { OAuth2ClientCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly clientOauth?: OAuth2ClientCredentials | undefined;
  readonly clientOauthStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
  readonly bearerAuth?: TokenProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    accessTokenServer?: {
      baseUrl?: string;
    };
  };
};
