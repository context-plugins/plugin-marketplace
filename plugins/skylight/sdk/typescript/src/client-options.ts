import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** API key authentication */
  readonly apikey?: TokenProvider | undefined;
};

type ServerOptions = {
  /** Skylight API production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
