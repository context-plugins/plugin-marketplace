import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Public generic OAuth provider settings returned to clients */
export type AuthProviderOAuthPublicConfig = {
  /** Custom OAuth provider display name */
  providerName: string;
  /** OAuth client ID */
  clientId: string;
  /** OAuth token endpoint URL */
  tokenEndpoint: string;
  /** OAuth authorization URL */
  authorizationUrl: string;
  /** Client secret (omitted when stripped for public responses) */
  clientSecret?: string;
  /** UserInfo endpoint URL */
  userInfoEndpoint?: string;
  /** Default OAuth scopes */
  scope?: string;
  /** Whether just-in-time user provisioning is enabled for this provider */
  enableJit?: boolean;
};

export const authProviderOAuthPublicConfigSchema: Schema<AuthProviderOAuthPublicConfig> =
  s.object<AuthProviderOAuthPublicConfig>({
    providerName: s.string(),
    clientId: s.string(),
    tokenEndpoint: s.string(),
    authorizationUrl: s.string(),
    clientSecret: s.optional(s.string()),
    userInfoEndpoint: s.optional(s.string()),
    scope: s.optional(s.string()),
    enableJit: s.optional(s.boolean()),
  });
