import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Enter your DevCycle SDK token
   *
   * @remarks
   * Unset, it is read from `DEV_CYCLE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    defaultDevCycleBucketingBucketingApi?: {
      baseUrl?: string;
    };
  };
};
