import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Specify the authorization token.
   *
   * @remarks
   * Unset, it is read from `FLOW_ACCOUNT_BEARER`.
   */
  readonly bearer?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** The sandbox server */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** The sandbox server */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
