import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly apiKeyHeader?: TokenProvider | undefined;
};

type ServerOptions = {
  /** API server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
