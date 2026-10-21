import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Public Azure AD OAuth settings returned to clients */
export type AuthProviderAzureAdPublicConfig = {
  /** Azure AD tenant ID */
  tenantId?: string;
  /** Azure AD client ID */
  clientId?: string;
  /** Whether just-in-time user provisioning is enabled for Azure AD */
  enableJit?: boolean;
};

export const authProviderAzureAdPublicConfigSchema: Schema<AuthProviderAzureAdPublicConfig> =
  s.object<AuthProviderAzureAdPublicConfig>({
    tenantId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    enableJit: s.optional(s.boolean()),
  });
