import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedGrantTypeSchema, type AllowedGrantType } from "./allowed-grant-type.js";

/**
 * Request to update an OAuth app (`updateAppSchema` in `oauth.validators.ts`).
 *
 * All fields are optional — include only fields that should change. URL fields (`homepageUrl`,
 * `privacyPolicyUrl`, `termsOfServiceUrl`) accept `null` to clear them (nullable in Zod).
 *
 * **Redirect rule (Zod refine):** If `allowedGrantTypes` includes `authorization_code` and
 * `redirectUris` is present in the body, `redirectUris` must contain at least one URI.
 */
export type UpdateOAuthAppRequest = {
  /** App name */
  name?: string;
  /** App description */
  description?: string;
  /**
   * Allowed redirect URIs (up to 10). Required when `authorization_code` grant type is enabled.
   * Preserved in the database even if `authorization_code` is removed from grant types.
   */
  redirectUris?: string[];
  allowedGrantTypes?: AllowedGrantType[];
  allowedScopes?: string[];
  homepageUrl?: string | null;
  privacyPolicyUrl?: string | null;
  termsOfServiceUrl?: string | null;
  accessTokenLifetime?: number;
  refreshTokenLifetime?: number;
};

export const updateOAuthAppRequestSchema: Schema<UpdateOAuthAppRequest> = s.object<UpdateOAuthAppRequest>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  redirectUris: s.optional(s.array(s.string())),
  allowedGrantTypes: s.optional(s.array(s.lazy(() => allowedGrantTypeSchema))),
  allowedScopes: s.optional(s.array(s.string())),
  homepageUrl: s.optionalNullable(s.string()),
  privacyPolicyUrl: s.optionalNullable(s.string()),
  termsOfServiceUrl: s.optionalNullable(s.string()),
  accessTokenLifetime: s.optional(s.int()),
  refreshTokenLifetime: s.optional(s.int()),
});
