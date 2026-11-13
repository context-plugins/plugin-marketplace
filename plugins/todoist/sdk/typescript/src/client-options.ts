import type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Personal API token (Todoist Settings > Integrations > Developer) or an OAuth access token. */
  readonly bearerAuth?: TokenProvider | undefined;
  /** OAuth client credentials (client_id:client_secret), used only to revoke tokens. */
  readonly clientBasic?: BasicAuthCredentials | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
