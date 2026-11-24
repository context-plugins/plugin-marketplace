import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Token of the form `ak_live_<random>`. Issued from `/account/api-keys` on the website. Send as
   * `Authorization: Bearer …`.
   *
   * @remarks
   * Unset, it is read from `ALPHA_AI_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production (API host — key required) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
