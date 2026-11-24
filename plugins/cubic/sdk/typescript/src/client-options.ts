import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * A personal API key (cbk_) or an organization API key (cok_) with any access, from Settings >
   * API, CLI & MCP. Requires Pro or Max. Analytics API keys that start with cak_ keep working, but
   * cubic no longer creates them., A personal API key (cbk_) or an organization API key (cok_) from
   * Settings > API, CLI & MCP. An organization key with Read access can only call the GET
   * operations.
   *
   * @remarks
   * Unset, it is read from `CUBIC_ANALYTICS_API_KEY`.
   */
  readonly analyticsApiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
