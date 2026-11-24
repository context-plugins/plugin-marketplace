import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Your Mailboxlayer API access key; pass as `access_key` query parameter.
   *
   * @remarks
   * Unset, it is read from `MAILBOXLAYER_ACCESS_KEY_QUERY`.
   */
  readonly accessKeyQuery?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
