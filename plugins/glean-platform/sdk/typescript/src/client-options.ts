import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Glean API token. Obtain via Admin Console -> Platform -> API Tokens, or via OAuth 2.0 client
   * credentials flow.
   */
  readonly apiToken?: TokenProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
    /**
     * The instance name (typically the email domain without the TLD) that determines the deployment
     * backend.
     *
     * @default "instance-name"
     */
    instance?: string;
  };
};
