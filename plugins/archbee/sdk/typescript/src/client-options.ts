import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Requires the Authorization header in the form Authorization: Bearer {base64(docSpaceId~apiKey)}
   * — the base64 encoding of the docSpaceId, a tilde, and the apiKey. A team key beginning abteam_
   * may be used instead to reach every space in the organization.
   *
   * @remarks
   * Unset, it is read from `ARCHBEE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Archbee API Server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
