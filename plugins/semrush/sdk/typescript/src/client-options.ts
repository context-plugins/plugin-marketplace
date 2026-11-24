import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Use token retrieved from Jwt Issuer
   * [Documentation](https://www.semrush.com/apps/docs/server-to-server-api/bearer-token)
   *
   * @remarks
   * Unset, it is read from `SEMRUSH_JWT_ISSUER_TOKEN`.
   */
  readonly jwtIssuerToken?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
