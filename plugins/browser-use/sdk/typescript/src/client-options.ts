import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `BROWSER_USE_API_KEY_HEADER`. */
  readonly apiKeyHeader?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
