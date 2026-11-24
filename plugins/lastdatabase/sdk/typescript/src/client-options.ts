import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Active LastDatabase API key.
   *
   * Send the key in the Authorization header:
   *
   * Authorization: Bearer YOUR_API_KEY
   *
   * @remarks
   * Unset, it is read from `LAST_DATABASE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
