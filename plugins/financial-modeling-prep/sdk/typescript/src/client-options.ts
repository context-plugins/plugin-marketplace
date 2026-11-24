import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `FINANCIAL_MODELING_PREP_API_KEY_QUERY`. */
  readonly apiKeyQuery?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Financial Modeling Prep v3 API */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
