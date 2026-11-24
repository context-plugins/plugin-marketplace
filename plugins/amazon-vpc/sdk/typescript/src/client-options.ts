import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * AWS Signature Version 4 authentication
   *
   * @remarks
   * Unset, it is read from `AMAZON_VPC_SIGV4_AUTH`.
   */
  readonly sigv4Auth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Amazon EC2 Regional Endpoint (VPC operations) */
  readonly serverOptions?: {
    baseUrl?: string;
    /** AWS Region @default "us-east-1" */
    region?: string;
  };
};
