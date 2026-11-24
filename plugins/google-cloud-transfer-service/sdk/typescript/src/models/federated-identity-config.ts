import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The identity of an Azure application through which Storage Transfer Service can authenticate
 * requests using Azure workload identity federation. Storage Transfer Service can issue requests to
 * Azure Storage through registered Azure applications, eliminating the need to pass credentials to
 * Storage Transfer Service directly. To configure federated identity, see [Configure access to
 * Microsoft Azure
 * Storage](https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option_3_authenticate_using_federated_identity).
 */
export type FederatedIdentityConfig = {
  /** Required. The client (application) ID of the application with federated credentials. */
  clientId?: string;
  /** Required. The tenant (directory) ID of the application with federated credentials. */
  tenantId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const federatedIdentityConfigSchema: Schema<FederatedIdentityConfig> =
  s.object<FederatedIdentityConfig>(
    {
      clientId: s.optional(s.string()),
      tenantId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
