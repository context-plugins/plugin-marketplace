import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * The Bucket read key, passed as a query parameter. Grants read access to a single Bucket and
   * nothing else. Find it under Bucket > Settings > API Access in the dashboard. Buckets with no
   * read key configured accept reads without one.
   *
   * @remarks
   * Unset, it is read from `COSMIC_READ_KEY`.
   */
  readonly readKey?: SecretProvider | undefined;
  /**
   * The Bucket write key, passed as `Authorization: Bearer <write_key>`. Grants read and write
   * access to a single Bucket and nothing else. Find it under Bucket > Settings > API Access in the
   * dashboard. The bare key without the `Bearer ` prefix is also accepted, but `Bearer` is the
   * documented form. Buckets with no write key configured accept writes without one.
   *
   * @remarks
   * Unset, it is read from `COSMIC_WRITE_KEY`.
   */
  readonly writeKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
