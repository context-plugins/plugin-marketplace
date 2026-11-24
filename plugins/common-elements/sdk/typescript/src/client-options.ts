import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * An API key from /settings/api-keys, sent as `Authorization: Bearer ce_live_...`. Sandbox
   * requests use the published test key documented at /api/v1/meta/sandbox.
   *
   * @remarks
   * Unset, it is read from `COMMON_ELEMENTS_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
