import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Bearer token. Provide either a Global API Token (account-wide) or a team-scoped Uptime API
   * Token. Issued from Better Stack → API tokens.
   *
   * @remarks
   * Unset, it is read from `BETTER_STACK_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Better Stack Uptime API (v2 surface — monitors, heartbeats, status pages, on-call) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Better Stack Uptime API (v2 surface — monitors, heartbeats, status pages, on-call) */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
