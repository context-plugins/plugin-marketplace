import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `CORESIGNAL_API_KEY`. */
  readonly apiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Coresignal Multi-source Company API production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
