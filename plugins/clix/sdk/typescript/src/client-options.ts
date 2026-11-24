import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Project ID for authentication
   *
   * @remarks
   * Unset, it is read from `CLIX_PROJECT_ID_AUTH`.
   */
  readonly projectIdAuth?: SecretProvider | undefined;
  /**
   * API Key for authentication
   *
   * @remarks
   * Unset, it is read from `CLIX_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
