import type {
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  SecretProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 authentication via Microsoft Entra ID
   *
   * @remarks
   * The one token requests every scope this grant declares unless `scope` narrows it.
   *
   * It has no environment variable.
   */
  readonly oauth2AuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2AuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  /**
   * OAuth 2.0 authentication via Microsoft Entra ID
   *
   * @remarks
   * Each call requests the scopes its operation declares, and a token is cached per scope set.
   * Setting `scope` requests that one value for every call and keeps a single token.
   *
   * Unset, it is read from `DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID`,
   * `DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET` and
   * `DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_SCOPE`.
   */
  readonly oauth2ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth2ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
  /**
   * Bearer token obtained from Microsoft Entra ID
   *
   * @remarks
   * Unset, it is read from `DYNAMICS365_BUSINESS_CENTRAL_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        default?: {
          baseUrl?: string;
          /** The name of the Business Central environment @default "production" */
          environment?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        authServer?: {
          baseUrl?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        defaultBusinessCentralAdministrationCenterAppManagementApi?: {
          baseUrl?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        defaultBusinessCentralAutomationApiV20CompaniesApi?: {
          baseUrl?: string;
          /** The name of the Business Central environment @default "production" */
          environment?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        default?: {
          baseUrl?: string;
          /** The on-premises server hostname @default "localhost" */
          server?: string;
          /** The OData services port @default "7048" */
          port?: string;
          /** The Business Central server instance name @default "BC" */
          instance?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        authServer?: {
          baseUrl?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        defaultBusinessCentralAdministrationCenterAppManagementApi?: {
          baseUrl?: string;
        };
        /**
         * Business Central Online (Common Endpoint), Business Central Administration Center,
         * Business Central Administration Center, Business Central Online Automation API, Business
         * Central Online Automation API, Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business
         * Central Online (Common Endpoint), Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online Automation API, Business Central Online
         * Automation API, Business Central Online Automation API, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common
         * Endpoint), Business Central Administration Center, Business Central Online (Common
         * Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation
         * API, Business Central Online Automation API, Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online (Common Endpoint),
         * Business Central Online (Common Endpoint), Business Central Online Automation API,
         * Business Central Online Automation API, Business Central Administration Center, Business
         * Central Administration Center, Business Central Administration Center, Business Central
         * Online Automation API, Business Central Online (Common Endpoint), Business Central Online
         * (Common Endpoint)
         */
        defaultBusinessCentralAutomationApiV20CompaniesApi?: {
          baseUrl?: string;
          /** The on-premises server hostname @default "localhost" */
          server?: string;
          /** The OData services port @default "7048" */
          port?: string;
          /** The Business Central server instance name @default "BC" */
          instance?: string;
        };
      };
    };
