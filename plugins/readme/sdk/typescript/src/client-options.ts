import type { BasicAuthCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * HTTP Basic auth using your ReadMe API key as the username (password blank).
   *
   * @remarks
   * Unset, it is read from `READ_ME_BASIC_AUTH_USERNAME` and `READ_ME_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
  /**
   * Use your ReadMe API key as a Bearer token in the Authorization header.
   *
   * @remarks
   * Unset, it is read from `READ_ME_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base
         * URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API
         * v2 base URL, ReadMe API v2 base URL, ReadMe Metrics API, ReadMe API v2 base URL, ReadMe
         * API v2 base URL
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base
         * URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API
         * v2 base URL, ReadMe API v2 base URL, ReadMe Metrics API, ReadMe API v2 base URL, ReadMe
         * API v2 base URL
         */
        defaultReadMeApiKeysApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base
         * URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API
         * v2 base URL, ReadMe API v2 base URL, ReadMe Metrics API, ReadMe API v2 base URL, ReadMe
         * API v2 base URL
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base
         * URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API
         * v2 base URL, ReadMe API v2 base URL, ReadMe Metrics API, ReadMe API v2 base URL, ReadMe
         * API v2 base URL
         */
        defaultReadMeApiKeysApi?: {
          baseUrl?: string;
        };
      };
    };
