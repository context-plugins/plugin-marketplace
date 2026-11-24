import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API key as Bearer token: `Authorization: Bearer rdx_...`
   *
   * @remarks
   * Unset, it is read from `RENDEX_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
  /**
   * API key in custom header: `x-api-key: rdx_...`
   *
   * @remarks
   * Unset, it is read from `RENDEX_API_KEY_HEADER`.
   */
  readonly apiKeyHeader?: SecretProvider | undefined;
  /**
   * API key as query parameter (GET endpoint only): `?key=rdx_...`
   *
   * @remarks
   * Unset, it is read from `RENDEX_API_KEY_QUERY`.
   */
  readonly apiKeyQuery?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
