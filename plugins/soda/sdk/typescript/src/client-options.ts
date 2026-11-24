import type { BasicAuthCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Unset, it is read from `SODA_BASIC_AUTH_API_KEY_USERNAME` and
   * `SODA_BASIC_AUTH_API_KEY_PASSWORD`.
   */
  readonly basicAuthApiKey?: BasicAuthCredentials | undefined;
  /** Unset, it is read from `SODA_COOKIE_TOKEN`. */
  readonly cookieToken?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Cloud EU */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Cloud EU */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
