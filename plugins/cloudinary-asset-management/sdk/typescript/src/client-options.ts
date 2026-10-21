import type { BasicAuthCredentials, OAuth2AuthorizationCodeCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import type { Region } from "./models/region.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Basic authentication using Cloudinary API Key and API Secret. */
  readonly basicAuth?: BasicAuthCredentials | undefined;
  /** OAuth2 Authorization Code flow for user authentication */
  readonly oauth2?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Regional API endpoints for optimal performance. */
        default?: {
          baseUrl?: string;
          /** Regional endpoint selection @default "api" */
          region?: Region;
        };
        /** Regional API endpoints for optimal performance. */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Regional API endpoints for optimal performance. */
        default?: {
          baseUrl?: string;
          /** API host domain. @default "api.cloudinary.com" */
          host?: string;
        };
        /** Regional API endpoints for optimal performance. */
        authServer?: {
          baseUrl?: string;
        };
      };
    };
