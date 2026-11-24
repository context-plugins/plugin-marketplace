import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `BASIQ_API_KEY`. */
  readonly apiKey?: SecretProvider | undefined;
  /** Unset, it is read from `BASIQ_SERVICES_TOKEN`. */
  readonly servicesToken?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production server, Basiq Webhooks */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
