import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API key; accepted by methods that do not need user data.
   *
   * @remarks
   * Unset, it is read from `GOOGLE_CLOUD_DATAPROC_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
  /**
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
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
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
