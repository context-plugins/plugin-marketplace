import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Default authentication mechanism
   *
   * @remarks
   * Unset, it is read from `CODE_QR_TOKEN`.
   */
  readonly token?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production API */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
