import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Bearer access token obtained via POST /api/v1/authentication/login using `x-client-id` and
   * `x-api-key` request headers.
   *
   * @remarks
   * Unset, it is read from `AIRWALLEX_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /** Unset, it is read from `AIRWALLEX_CLIENT_ID_HEADER`. */
  readonly clientIdHeader?: SecretProvider | undefined;
  /** Unset, it is read from `AIRWALLEX_API_KEY_HEADER`. */
  readonly apiKeyHeader?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Airwallex production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Airwallex production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
