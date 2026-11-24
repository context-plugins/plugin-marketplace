import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `PERIGON_API_KEY_AUTH`. */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Generated server url */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
