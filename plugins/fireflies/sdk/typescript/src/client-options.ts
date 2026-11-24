import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Obtain an API key from the Fireflies dashboard under Settings > Integrations > API. Pass the
   * key as a Bearer token in the Authorization header.
   *
   * @remarks
   * Unset, it is read from `FIREFLIES_AI_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Fireflies GraphQL API endpoint */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
