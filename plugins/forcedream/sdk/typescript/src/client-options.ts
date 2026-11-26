import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * An `fd_live_` billing key (from signup) or `sk_fd_` account key.
   *
   * @remarks
   * Unset, it is read from `FORCE_DREAM_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production (the only environment tested) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
