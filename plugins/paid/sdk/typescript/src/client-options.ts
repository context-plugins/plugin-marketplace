import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API Key authentication using Bearer token
   *
   * @remarks
   * Unset, it is read from `PAID_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * Production, Production API, Production API, Production, Production API, Production API,
         * Production API, Production API, Production, Production API, Production API, Production,
         * Production, Production, Production API, Production, Production API, Production,
         * Production, Production API, Production API, Production API
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * Production, Production API, Production API, Production, Production API, Production API,
         * Production API, Production API, Production, Production API, Production API, Production,
         * Production, Production, Production API, Production, Production API, Production,
         * Production, Production API, Production API, Production API
         */
        defaultReferenceAnalyticsExperimentalApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * Production, Production API, Production API, Production, Production API, Production API,
         * Production API, Production API, Production, Production API, Production API, Production,
         * Production, Production, Production API, Production, Production API, Production,
         * Production, Production API, Production API, Production API
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * Production, Production API, Production API, Production, Production API, Production API,
         * Production API, Production API, Production, Production API, Production API, Production,
         * Production, Production, Production API, Production, Production API, Production,
         * Production, Production API, Production API, Production API
         */
        defaultReferenceAnalyticsExperimentalApi?: {
          baseUrl?: string;
        };
      };
    };
