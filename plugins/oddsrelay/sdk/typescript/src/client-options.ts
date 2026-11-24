import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * `Authorization: Bearer or_live_…`
   *
   * @remarks
   * Unset, it is read from `ODDS_RELAY_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * The same key in `x-api-key`.
   *
   * @remarks
   * Unset, it is read from `ODDS_RELAY_API_KEY_HEADER`.
   */
  readonly apiKeyHeader?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
