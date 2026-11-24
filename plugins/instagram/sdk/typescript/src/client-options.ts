import type { OAuth2AuthorizationCodeCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 authentication via Instagram Login or Facebook Login.
   *
   * @remarks
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly oauth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Facebook Graph API (Facebook Login) */
        default?: {
          baseUrl?: string;
        };
        /** Facebook Graph API (Facebook Login) */
        authServer?: {
          baseUrl?: string;
        };
        /** Facebook Graph API (Facebook Login) */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Facebook Graph API (Facebook Login) */
        default?: {
          baseUrl?: string;
        };
        /** Facebook Graph API (Facebook Login) */
        authServer?: {
          baseUrl?: string;
        };
        /** Facebook Graph API (Facebook Login) */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    };
