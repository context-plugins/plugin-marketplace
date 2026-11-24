import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Surfe API key issued from the Surfe dashboard, sent as `Authorization: Bearer {api-key}`.
   *
   * @remarks
   * Unset, it is read from `SURFE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Surfe API v2 production base URL */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
