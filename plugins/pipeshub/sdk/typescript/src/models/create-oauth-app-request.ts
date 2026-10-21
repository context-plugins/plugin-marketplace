import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedGrantTypeSchema, type AllowedGrantType } from "./allowed-grant-type.js";

/**
 * Request to create a new OAuth app (`createAppSchema` in `oauth.validators.ts`).
 *
 * **Required:** `name`, `allowedScopes`. **Optional:** `description`, `redirectUris`,
 * `allowedGrantTypes`, `homepageUrl`, `privacyPolicyUrl`, `termsOfServiceUrl`, `isConfidential`,
 * `accessTokenLifetime`, `refreshTokenLifetime`.
 *
 * **Redirect rule (Zod refine):** If the effective grant list includes `authorization_code`
 * (including when `allowedGrantTypes` is omitted — defaults to `authorization_code` +
 * `refresh_token`), at least one redirect URI is required. If grants exclude `authorization_code`,
 * `redirectUris` may be omitted.
 */
export type CreateOAuthAppRequest = {
  /** App name (displayed to users during authorization) */
  name: string;
  /** App description */
  description?: string;
  /**
   * Allowed redirect URIs (max 10). Required when an effective grant list includes
   * `authorization_code` (including the default when `allowedGrantTypes` is omitted).
   */
  redirectUris?: string[];
  /**
   * Allowed grant types. Defaults to `["authorization_code", "refresh_token"]` if omitted (applied
   * by the service, not Zod).
   */
  allowedGrantTypes?: AllowedGrantType[];
  /** Scopes the app can request (non-empty) */
  allowedScopes: string[];
  /** App homepage URL (shown during authorization) */
  homepageUrl?: string;
  /** Privacy policy URL */
  privacyPolicyUrl?: string;
  /** Terms of service URL */
  termsOfServiceUrl?: string;
  /**
   * Whether the app can securely store secrets.
   * - `true`: Server-side app (secret required for token requests)
   * - `false`: Browser/mobile app (must use PKCE)
   *
   * @default true
   */
  isConfidential?: boolean;
  /** Access token lifetime in seconds (300–86400) @default 3600 */
  accessTokenLifetime?: number;
  /** Refresh token lifetime in seconds (3600–31536000) @default 2592000 */
  refreshTokenLifetime?: number;
};

export const createOAuthAppRequestSchema: Schema<CreateOAuthAppRequest> = s.object<CreateOAuthAppRequest>({
  name: s.string(),
  description: s.optional(s.string()),
  redirectUris: s.optional(s.array(s.string())),
  allowedGrantTypes: s.optional(s.array(s.lazy(() => allowedGrantTypeSchema))),
  allowedScopes: s.array(s.string()),
  homepageUrl: s.optional(s.string()),
  privacyPolicyUrl: s.optional(s.string()),
  termsOfServiceUrl: s.optional(s.string()),
  isConfidential: s.defaulted(s.boolean(), true),
  accessTokenLifetime: s.defaulted(s.int(), 3600),
  refreshTokenLifetime: s.defaulted(s.int(), 2592000),
});
