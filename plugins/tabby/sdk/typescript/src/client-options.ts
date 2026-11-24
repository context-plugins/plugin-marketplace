import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Bearer authentication header of the form `Bearer <secret_key>`, where `<secret_key>` is your
   * `secret_key`.
   *
   * @remarks
   * Unset, it is read from `TABBY_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Production (UAE, Kuwait) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Production (UAE, Kuwait) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
