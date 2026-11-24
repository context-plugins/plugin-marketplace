import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Bearer API key. stay_test_ = deterministic sandbox (0 credits); stay_live_ = live.
   *
   * @remarks
   * Unset, it is read from `STAYING_API_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** REST API (v1) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
