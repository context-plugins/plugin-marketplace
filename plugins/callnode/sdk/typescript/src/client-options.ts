import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Your API key, e.g. `cn_live_...`.
   *
   * @remarks
   * Unset, it is read from `CALL_NODE_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
  /**
   * Unix seconds as a string, used as the signature prefix.
   *
   * @remarks
   * Unset, it is read from `CALL_NODE_TIMESTAMP_AUTH`.
   */
  readonly timestampAuth?: SecretProvider | undefined;
  /**
   * `hex(HMAC_SHA256(apiSecret, timestamp + "\n" + rawBody))`.
   *
   * @remarks
   * Unset, it is read from `CALL_NODE_SIGNATURE_AUTH`.
   */
  readonly signatureAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
