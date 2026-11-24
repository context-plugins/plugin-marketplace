import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 Bearer token obtained from the token endpoint. Valid for 24 hours., OAuth 2.0 Bearer
   * token obtained from the access token endpoint. A user access token is required for
   * post-checkout operations., OAuth 2.0 Bearer token obtained from the token endpoint. Valid for
   * 24 hours., OAuth 2.0 Bearer token obtained using client credentials with the
   * connect:data_ingestion scope., OAuth 2.0 Bearer token obtained from the token endpoint. Valid
   * for 24 hours., OAuth 2.0 Bearer token obtained from the access token endpoint. A user access
   * token is required for post-checkout operations., OAuth 2.0 Bearer token obtained from the token
   * endpoint. Valid for 24 hours., OAuth 2.0 Bearer token obtained using client credentials with
   * the connect:data_ingestion scope., OAuth 2.0 Bearer token obtained from the access token
   * endpoint. A user access token is required for post-checkout operations.
   *
   * @remarks
   * Unset, it is read from `INSTACART_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * API key authentication. Include your API key in the Authorization header.
   *
   * @remarks
   * Unset, it is read from `INSTACART_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Production Server */
        default?: {
          baseUrl?: string;
        };
        /** Production Server */
        defaultInstacartRestApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Production Server */
        default?: {
          baseUrl?: string;
        };
        /** Production Server */
        defaultInstacartRestApi?: {
          baseUrl?: string;
        };
      };
    };
