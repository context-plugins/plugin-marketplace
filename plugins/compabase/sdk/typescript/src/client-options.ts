import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `COMPABASE_API_KEY_AUTH`. */
  readonly apiKeyAuth?: SecretProvider | undefined;
  /** Unset, it is read from `COMPABASE_BEARER_AUTH`. */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Full URL */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
