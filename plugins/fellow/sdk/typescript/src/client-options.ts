import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `FELLOW_DEVELOPER_API_KEY_AUTH`. */
  readonly developerApiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Fellow */
  readonly serverOptions?: {
    baseUrl?: string;
    /** The subdomain for your Fellow workspace @default "your-fellow-subdomain" */
    subdomain?: string;
  };
};
