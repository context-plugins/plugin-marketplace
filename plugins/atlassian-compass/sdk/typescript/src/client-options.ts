import type { BasicAuthCredentials } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Unset, it is read from `ATLASSIAN_COMPASS_BASIC_AUTH_USERNAME` and
   * `ATLASSIAN_COMPASS_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
