import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * jid_live_... key from https://jid.com/pricing (free key: no card).
   *
   * @remarks
   * Unset, it is read from `JID_BEARER`.
   */
  readonly bearer?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
