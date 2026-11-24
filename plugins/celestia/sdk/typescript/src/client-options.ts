import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `CELESTIA_BEARER_AUTH`. */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /** Default celestia-node JSON-RPC endpoint (light/bridge/full) */
    default?: {
      baseUrl?: string;
    };
    /** Default celestia-node JSON-RPC endpoint (light/bridge/full) */
    defaultCelestiaWebsiteContactApi?: {
      baseUrl?: string;
    };
  };
};
