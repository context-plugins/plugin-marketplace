import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Authorization header in the form 'Bearer API_KEY'. The API key is either a perpetual token
   * issued by Leadspace or an OAuth 2.0 token obtained from POST /oauth/authorize., Authorization
   * header in the form 'Bearer API_KEY', Authorization header in the form 'Bearer API_KEY'. The API
   * key is either a perpetual token issued by Leadspace or an OAuth 2.0 token obtained from POST
   * /oauth/authorize., Authorization header in the form 'Bearer API_KEY', Authorization header in
   * the form 'Bearer API_KEY'
   *
   * @remarks
   * Unset, it is read from `LEADSPACE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Leadspace API gateway (production) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
