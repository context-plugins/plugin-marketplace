import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or
   * authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0
   * Bearer token obtained from the UiPath Identity Server. Platform Management API scopes include
   * PM.Users, PM.Groups, PM.Audit, PM.License, and their read-only variants., OAuth 2.0 Bearer
   * token obtained from the UiPath Identity Server. Credentials can also be provided using App ID
   * and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath
   * Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA
   * integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can
   * also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token
   * obtained from the UiPath Identity Server. Data Service scopes include DataService.Data and
   * DataService.Data.Read. Tokens are valid for one hour; refresh tokens are supported., OAuth 2.0
   * Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using
   * App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the
   * UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token
   * with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath
   * Identity Server. Platform Management API scopes include PM.Users, PM.Groups, PM.Audit,
   * PM.License, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath
   * Identity Server. Use the client credentials or authorization code flow to obtain a token with
   * the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity
   * Server. Platform Management API scopes include PM.Users, PM.Groups, PM.Audit, PM.License, and
   * their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use
   * the client credentials or authorization code flow to obtain a token with the required
   * Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the
   * client credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API
   * scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only
   * variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API
   * scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only
   * variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API
   * scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only
   * variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API
   * scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only
   * variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API
   * scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only
   * variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client
   * credentials or authorization code flow to obtain a token with the required Orchestrator
   * scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also
   * be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token
   * obtained from the UiPath Identity Server. Use the client credentials or authorization code flow
   * to obtain a token with the required Orchestrator scopes.
   *
   * @remarks
   * Unset, it is read from `UI_PATH_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * API token generated from the Automation Hub Admin Console under Platform Setup > Open API.
   * Include as a Bearer token in the Authorization header: "Bearer {token}".
   *
   * @remarks
   * Unset, it is read from `UI_PATH_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        default?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathAutomationHubAppInventoryApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          orgName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathPlatformManagementAuditLogsApi?: {
          baseUrl?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDocumentUnderstandingClassificationApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDataServiceEntitiesApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathTestManagerProjectsApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        default?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathAutomationHubAppInventoryApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathPlatformManagementAuditLogsApi?: {
          baseUrl?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDocumentUnderstandingClassificationApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDataServiceEntitiesApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathTestManagerProjectsApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      readonly serverOptions?: {
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        default?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathAutomationHubAppInventoryApi?: {
          baseUrl?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathPlatformManagementAuditLogsApi?: {
          baseUrl?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDocumentUnderstandingClassificationApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathDataServiceEntitiesApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
        /**
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud
         * Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath
         * Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test
         * Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator,
         * UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath
         * Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation
         * Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud
         * Document Understanding, UiPath Automation Cloud Orchestrator
         */
        defaultUiPathTestManagerProjectsApi?: {
          baseUrl?: string;
          /** The name of your UiPath organization @default "your-org" */
          organizationName?: string;
          /** The name of your UiPath tenant @default "your-tenant" */
          tenantName?: string;
        };
      };
    };
