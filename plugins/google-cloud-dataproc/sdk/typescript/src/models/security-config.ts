import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { identityConfig2Schema, type IdentityConfig2 } from "./identity-config2.js";
import { kerberosConfig3Schema, type KerberosConfig3 } from "./kerberos-config3.js";

/** Security related configuration, including encryption, Kerberos, etc. */
export type SecurityConfig = {
  /**
   * Optional. Identity related configuration, including service account based secure multi-tenancy
   * user mappings.
   */
  identityConfig?: IdentityConfig2;
  /** Optional. Kerberos related configuration. */
  kerberosConfig?: KerberosConfig3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const securityConfigSchema: Schema<SecurityConfig> = s.object<SecurityConfig>(
  {
    identityConfig: s.optional(s.lazy(() => identityConfig2Schema)),
    kerberosConfig: s.optional(s.lazy(() => kerberosConfig3Schema)),
  },
  { additionalProperties: s.json() },
);
