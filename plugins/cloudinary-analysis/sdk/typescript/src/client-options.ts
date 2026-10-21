import type { BasicAuthCredentials, OAuth2AuthorizationCodeCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly basicAuth?: BasicAuthCredentials | undefined;
  readonly oAuth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oAuth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
      /** Your Cloud Name. @default "CLOUD_NAME" */
      cloudName?: string;
    };
    authServer?: {
      baseUrl?: string;
    };
  };
};
