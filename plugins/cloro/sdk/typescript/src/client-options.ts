import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * cloro API key as a bearer token. One key grants every endpoint in this spec; per-key scopes are
   * not available, so a client cannot request a narrower permission. Keys are created and revoked
   * in the [dashboard](https://dashboard.cloro.dev/api-keys).
   *
   * @remarks
   * Unset, it is read from `CLORO_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
