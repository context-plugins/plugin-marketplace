import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `ZILLAPI_BEARER_AUTH`. */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
