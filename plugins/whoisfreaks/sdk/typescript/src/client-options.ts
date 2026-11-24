import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `WHOIS_FREAKS_API_KEY_AUTH`. */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** API Solutions (live lookups) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** API Solutions (live lookups) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
