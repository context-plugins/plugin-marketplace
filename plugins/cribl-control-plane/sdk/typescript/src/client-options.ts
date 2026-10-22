import type { OAuth2ClientCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly bearerAuth?: TokenProvider | undefined;
  readonly clientOauth?: OAuth2ClientCredentials | undefined;
  readonly clientOauthStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /** Cribl Leader or Cribl.Cloud workspace */
    default?: {
      baseUrl?: string;
      /** @default "localhost" */
      hostname?: string;
      /** @default "9000" */
      port?: string;
    };
    /** Cribl Leader or Cribl.Cloud workspace */
    accessTokenServer?: {
      baseUrl?: string;
    };
  };
};
