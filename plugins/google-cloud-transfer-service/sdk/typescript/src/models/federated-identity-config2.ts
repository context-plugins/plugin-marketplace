import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Federated identity config of a user registered Azure application. If
 * `federated_identity_config` is specified, do not specify azure_credentials or credentials_secret.
 */
export type FederatedIdentityConfig2 = {
  /** Required. The client (application) ID of the application with federated credentials. */
  clientId?: string;
  /** Required. The tenant (directory) ID of the application with federated credentials. */
  tenantId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const federatedIdentityConfig2Schema: Schema<FederatedIdentityConfig2> =
  s.object<FederatedIdentityConfig2>(
    {
      clientId: s.optional(s.string()),
      tenantId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
