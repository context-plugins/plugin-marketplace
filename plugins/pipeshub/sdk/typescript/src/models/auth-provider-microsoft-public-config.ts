import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Public Microsoft OAuth settings returned to clients */
export type AuthProviderMicrosoftPublicConfig = {
  /** Microsoft tenant ID */
  tenantId?: string;
  /** Microsoft OAuth client ID */
  clientId?: string;
  /** Whether just-in-time user provisioning is enabled for Microsoft */
  enableJit?: boolean;
};

export const authProviderMicrosoftPublicConfigSchema: Schema<AuthProviderMicrosoftPublicConfig> =
  s.object<AuthProviderMicrosoftPublicConfig>({
    tenantId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    enableJit: s.optional(s.boolean()),
  });
