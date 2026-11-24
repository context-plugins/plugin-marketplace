import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `PARALLEL_API_KEY_AUTH`. */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Parallel API */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
