import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token
   * with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or
   * personalize:read scope., OAuth 2.0 Bearer token with personalize:manage or personalize:read
   * scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with
   * appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0
   * Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with
   * launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or
   * personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0
   * Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with
   * launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or
   * personalize:read scope., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer
   * token with appropriate Automate scopes., Bearer token from the Identity Provider client for
   * SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication.,
   * Bearer token from the Identity Provider client for SCIM authentication., OAuth 2.0 Bearer token
   * with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope.
   *
   * @remarks
   * Unset, it is read from `CONTENTSTACK_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * Contentstack user authtoken for session-based authentication., User session token obtained from
   * the login endpoint., Contentstack user authtoken for session-based authentication.,
   * Contentstack user authtoken for session-based authentication., Contentstack user authtoken for
   * session-based authentication., Contentstack user authtoken for session-based authentication.,
   * Contentstack user authtoken for session-based authentication., User session token obtained from
   * the login endpoint., Contentstack user authtoken for session-based authentication., User
   * session token obtained from the login endpoint., User session token obtained from the login
   * endpoint., Contentstack user authtoken for session-based authentication., Contentstack user
   * authtoken for session-based authentication., Contentstack user authtoken for session-based
   * authentication., Contentstack user authtoken for session-based authentication., Contentstack
   * user authtoken for session-based authentication., Contentstack user authtoken for session-based
   * authentication., User session token obtained from the login endpoint., Contentstack user
   * authtoken for session-based authentication., User session token obtained from the login
   * endpoint., User session token obtained from the login endpoint., User session token obtained
   * from the login endpoint., Contentstack user authtoken for session-based authentication.,
   * Contentstack user authtoken for session-based authentication.
   *
   * @remarks
   * Unset, it is read from `CONTENTSTACK_AUTHTOKEN_AUTH`.
   */
  readonly authtokenAuth?: SecretProvider | undefined;
  /**
   * The API key for the Contentstack stack.
   *
   * @remarks
   * Unset, it is read from `CONTENTSTACK_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
  /**
   * The delivery token granting read access to the stack environment.
   *
   * @remarks
   * Unset, it is read from `CONTENTSTACK_DELIVERY_TOKEN`.
   */
  readonly deliveryToken?: SecretProvider | undefined;
  /**
   * Management token in the format "Bearer {management_token}" for server-to-server authentication
   * without user sessions.
   *
   * @remarks
   * Unset, it is read from `CONTENTSTACK_MANAGEMENT_TOKEN_AUTH`.
   */
  readonly managementTokenAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment4;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment5;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment6;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment7;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment8;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment9;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment10;
      readonly serverOptions?: {
        /** AWS North America Production Server */
        default?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAutomateManagementAccountsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackAssetsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackPersonalizeManagementAttributesApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackBrandKitManagementBrandKitsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEnvironmentsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackEventsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackProjectsApi?: {
          baseUrl?: string;
        };
        /** AWS North America Production Server */
        defaultContentstackScimScimGroupsApi?: {
          baseUrl?: string;
        };
      };
    };
