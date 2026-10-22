import type { OAuth2PasswordCredentials } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly oAuth2PasswordBearer?: OAuth2PasswordCredentials | undefined;
  readonly oAuth2PasswordBearerStrategy?: OAuth2TokenStrategy<OAuth2PasswordCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Sandbox */
        default?: {
          baseUrl?: string;
          /** Your Gr4vy instance ID @default "example" */
          id?: string;
        };
        /** Sandbox */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Sandbox */
        default?: {
          baseUrl?: string;
          /** Your Gr4vy instance ID @default "example" */
          id?: string;
        };
        /** Sandbox */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    };
