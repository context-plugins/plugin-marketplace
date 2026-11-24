import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API Key authentication using Bearer token
   *
   * @remarks
   * Unset, it is read from `NORDIC_FINANCIAL_NEWS_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
