import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `STOPLIGHT_AUTHORIZATION`. */
  readonly authorization?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
