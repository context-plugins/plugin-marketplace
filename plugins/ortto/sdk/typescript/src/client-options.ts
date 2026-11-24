import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Custom private API key configured in Ortto under Settings, supplied on every request in the
   * X-Api-Key header.
   *
   * @remarks
   * Unset, it is read from `ORTTO_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Default service endpoint */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Default service endpoint */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      /** Default service endpoint */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
