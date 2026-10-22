import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Public Google OAuth settings returned to clients */
export type AuthProviderGooglePublicConfig = {
  /** Google OAuth client ID */
  clientId?: string;
  /** Whether just-in-time user provisioning is enabled for Google */
  enableJit?: boolean;
};

export const authProviderGooglePublicConfigSchema: Schema<AuthProviderGooglePublicConfig> =
  s.object<AuthProviderGooglePublicConfig>({
    clientId: s.optional(s.string()),
    enableJit: s.optional(s.boolean()),
  });
