import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Workspace-scoped API key. Pass as `Authorization: Bearer <key>`. The `?api_key=<key>` query
   * parameter is deprecated: a key in a URL ends up in browser history, proxy logs and Referer
   * headers.
   *
   * @remarks
   * Unset, it is read from `AUDIOSCRAPE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
