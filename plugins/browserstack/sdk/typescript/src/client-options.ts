import type { BasicAuthCredentials } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * HTTP Basic auth using your BrowserStack username as username and your access key as password.
   *
   * @remarks
   * Unset, it is read from `BROWSER_STACK_BASIC_AUTH_USERNAME` and
   * `BROWSER_STACK_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
};

type ServerOptions = {
  /** BrowserStack Automate API base URL */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
