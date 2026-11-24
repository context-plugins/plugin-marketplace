import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API key issued from /dashboard/api-keys. Pro subscription required.
   *
   * @remarks
   * Unset, it is read from `AGENT_READY_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
