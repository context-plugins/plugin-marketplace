import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Obtain a token via POST /auth/token, then pass it as: Authorization: Bearer {token}
   *
   * @remarks
   * Unset, it is read from `JURI_SIGN_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production (also serves sandbox requests — see POST /auth/sandbox-token) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
