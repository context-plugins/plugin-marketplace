import type { BasicAuthCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Personal API token for authenticating with the CircleCI API. Can also be passed as a query
   * parameter., Personal API token for authenticating with the CircleCI API. Generate tokens in
   * your CircleCI account settings., Personal API token for authenticating with the CircleCI API.
   * Generate tokens in your CircleCI account settings., Personal API token for authenticating with
   * the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for
   * authenticating with the CircleCI API. Generate tokens in your CircleCI account settings.,
   * Personal API token for authenticating with the CircleCI API. Can also be passed as a query
   * parameter., Personal API token for authenticating with the CircleCI API. Can also be passed as
   * a query parameter., Personal API token for authenticating with the CircleCI API. Can also be
   * passed as a query parameter., Personal API token for authenticating with the CircleCI API.
   * Generate tokens in your CircleCI account settings., Personal API token for authenticating with
   * the CircleCI API. Can also be passed as a query parameter., Personal API token for
   * authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API
   * token for authenticating with the CircleCI API. Can also be passed as a query parameter.,
   * Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI
   * account settings., Personal API token for authenticating with the CircleCI API. Generate tokens
   * in your CircleCI account settings., Personal API token for authenticating with the CircleCI
   * API. Can also be passed as a query parameter.
   *
   * @remarks
   * Unset, it is read from `CIRCLE_CI_API_TOKEN`.
   */
  readonly apiToken?: SecretProvider | undefined;
  /**
   * HTTP basic authentication using a personal API token as the username with an empty password.
   *
   * @remarks
   * Unset, it is read from `CIRCLE_CI_BASIC_AUTH_USERNAME` and `CIRCLE_CI_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1
         */
        defaultCircleCiRestApiV2ContextApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI
         * Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI
         * Production API, CircleCI Production API, CircleCI Production API v1.1
         */
        defaultCircleCiRestApiV2ContextApi?: {
          baseUrl?: string;
        };
      };
    };
