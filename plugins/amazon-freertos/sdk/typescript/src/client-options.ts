import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * AWS Signature Version 4
   *
   * @remarks
   * Unset, it is read from `AMAZON_FREE_RTOS_AWS_SIG_V4`.
   */
  readonly awsSigV4?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
    /** @default "us-east-1" */
    region?: string;
  };
};
