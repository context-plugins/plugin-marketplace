import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * AWS Signature Version 4. The Authorization header carries an AWS4-HMAC-SHA256 signature over
   * the canonical request, with X-Amz-Date (and X-Amz-Security-Token for temporary credentials).
   * Not a bearer token.
   *
   * @remarks
   * Unset, it is read from `AMAZON_TRANSCRIBE_SIGV4`.
   */
  readonly sigv4?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        default?: {
          baseUrl?: string;
          /** @default "us-east-1" */
          region?: string;
        };
        defaultAmazonTranscribeServiceOperationsApi?: {
          baseUrl?: string;
          /** @default "us-east-1" */
          region?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        default?: {
          baseUrl?: string;
          /** @default "us-east-1" */
          region?: string;
        };
        defaultAmazonTranscribeServiceOperationsApi?: {
          baseUrl?: string;
          /** @default "us-east-1" */
          region?: string;
        };
      };
    };
