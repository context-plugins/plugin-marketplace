import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Your secret API key as a Bearer token: `pk_live_…` for real accounts, `pk_test_…` for sample
   * data. Keep it on your server.
   *
   * @remarks
   * Unset, it is read from `PRISMA_REVIEWS_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production (live and test keys) */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
