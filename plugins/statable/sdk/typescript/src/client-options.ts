import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * A key minted in Settings → API. All tokens start with `stbl_`. Missing, malformed, invalid,
   * expired, or revoked → 401. Every operation in this spec requires the key's `read` scope;
   * without it → 403 `insufficient_scope`.
   *
   * @remarks
   * Unset, it is read from `STATABLE_BEARER_AUTH`.
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
