import type { OAuth2AuthorizationCodeCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * chatbotAuth supports authorization code and implicit Oauth flows.
   *
   * @remarks
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly chatbotAuthAuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly chatbotAuthAuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  /**
   * chatbotAuth supports authorization code and implicit Oauth flows.
   *
   * @remarks
   * Unset, it is read from `SALESFORCE_SERVICE_CLOUD_CHATBOT_AUTH_IMPLICIT`.
   */
  readonly chatbotAuthImplicit?: SecretProvider | undefined;
  /**
   * Salesforce OAuth access token obtained using the JWT Bearer flow. Use the `chatbot_api` scope
   * with this flow to enable access to the Einstein Bots services.
   *
   * @remarks
   * Unset, it is read from `SALESFORCE_SERVICE_CLOUD_JWT_BEARER`.
   */
  readonly jwtBearer?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment4;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment5;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment6;
      readonly serverOptions?: {
        /** Einstein Bots API - NA West */
        default?: {
          baseUrl?: string;
        };
        /** Einstein Bots API - NA West */
        authServer?: {
          baseUrl?: string;
        };
      };
    };
