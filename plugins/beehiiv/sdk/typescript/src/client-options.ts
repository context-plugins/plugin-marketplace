import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `BEEHIIV_BEARER_AUTH_SCHEME`. */
  readonly bearerAuthScheme?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /** Default */
    default?: {
      baseUrl?: string;
    };
    /** Default */
    defaultOAuth2AuthorizationsApi?: {
      baseUrl?: string;
    };
  };
};
