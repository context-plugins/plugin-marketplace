import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authProviderAzureAdPublicConfigSchema,
  type AuthProviderAzureAdPublicConfig,
} from "./auth-provider-azure-ad-public-config.js";
import {
  authProviderGooglePublicConfigSchema,
  type AuthProviderGooglePublicConfig,
} from "./auth-provider-google-public-config.js";
import {
  authProviderMicrosoftPublicConfigSchema,
  type AuthProviderMicrosoftPublicConfig,
} from "./auth-provider-microsoft-public-config.js";
import {
  authProviderOAuthPublicConfigSchema,
  type AuthProviderOAuthPublicConfig,
} from "./auth-provider-oauth-public-config.js";

/** Configuration for external authentication providers (returned when those methods are allowed) */
export type AuthProviders = {
  /** Public Google OAuth settings returned to clients */
  google?: AuthProviderGooglePublicConfig;
  /** Public Microsoft OAuth settings returned to clients */
  microsoft?: AuthProviderMicrosoftPublicConfig;
  /** Public Azure AD OAuth settings returned to clients */
  azuread?: AuthProviderAzureAdPublicConfig;
  /** Public generic OAuth provider settings returned to clients */
  oauth?: AuthProviderOAuthPublicConfig;
  /** Present when SAML SSO is an allowed method; may be an empty object */
  saml?: Record<string, unknown>;
};

export const authProvidersSchema: Schema<AuthProviders> = s.object<AuthProviders>({
  google: s.optional(s.lazy(() => authProviderGooglePublicConfigSchema)),
  microsoft: s.optional(s.lazy(() => authProviderMicrosoftPublicConfigSchema)),
  azuread: s.optional(s.lazy(() => authProviderAzureAdPublicConfigSchema)),
  oauth: s.optional(s.lazy(() => authProviderOAuthPublicConfigSchema)),
  saml: s.optional(s.record(s.string(), s.unknown())),
});
