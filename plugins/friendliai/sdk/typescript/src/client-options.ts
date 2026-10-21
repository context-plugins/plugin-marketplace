import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * When using Friendli Suite API, you need to provide a **Personal API Key** (e.g. flp_XXX) as a
   * Bearer token for authentication and authorization purposes.
   *
   * For more detailed information, please refer
   * [here](https://friendli.ai/docs/openapi/introduction#authentication).
   */
  readonly token?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
