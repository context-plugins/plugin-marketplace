import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import type { Database } from "./models/database.js";
import type { Environment } from "./models/environment.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * CloudKit API token issued from the CloudKit dashboard, appended to the request URL as
   * `ckAPIToken`. Required for end-user authenticated access via web auth tokens.
   *
   * @remarks
   * Unset, it is read from `CLOUD_KIT_CLOUD_KIT_API_TOKEN`.
   */
  readonly cloudKitApiToken?: SecretProvider | undefined;
  /**
   * Server-to-server authentication uses ECDSA-signed requests with
   * `X-Apple-CloudKit-Request-KeyID`, `X-Apple-CloudKit-Request-ISO8601Date`, and
   * `X-Apple-CloudKit-Request-SignatureV1` headers.
   *
   * @remarks
   * Unset, it is read from `CLOUD_KIT_SERVER_TO_SERVER`.
   */
  readonly serverToServer?: SecretProvider | undefined;
};

type ServerOptions = {
  /** CloudKit Web Services database endpoint */
  readonly serverOptions?: {
    baseUrl?: string;
    /** CloudKit container identifier @default "iCloud.com.example.myapp" */
    container?: string;
    /** @default "development" */
    environment?: Environment;
    /** @default "public" */
    database?: Database;
  };
};
