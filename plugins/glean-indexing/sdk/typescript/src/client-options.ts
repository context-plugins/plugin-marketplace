import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
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
