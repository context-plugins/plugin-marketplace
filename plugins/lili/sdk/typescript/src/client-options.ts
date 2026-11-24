import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * The authorization in the format:<br/> Authorization: Lili accessKey:secretKey
   *
   * @remarks
   * Unset, it is read from `LILI_ACCESS_KEY`.
   */
  readonly accessKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Lili Server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
