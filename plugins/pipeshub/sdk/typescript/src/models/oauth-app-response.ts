import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/**
 * OAuth app details (without secret). Fields under `required:` always appear in `toAppResponse`
 * (`oauth.app.service.ts`); optional URL/description fields are only present when set by the
 * caller.
 */
export type OAuthAppResponse = {
  /** App ID */
  id: string;
  /** URL-friendly app slug */
  slug: string;
  /** OAuth client ID */
  clientId: string;
  /** App name */
  name: string;
  /** App description */
  description?: string;
  /** Allowed redirect URIs (always returned; may be empty) */
  redirectUris: string[];
  /** Allowed grant types */
  allowedGrantTypes: string[];
  /** Allowed scopes */
  allowedScopes: string[];
  /** App status */
  status: Status;
  /** App homepage */
  homepageUrl?: string;
  /** Privacy policy URL */
  privacyPolicyUrl?: string;
  /** Terms of service URL */
  termsOfServiceUrl?: string;
  /** Whether app is a confidential client */
  isConfidential: boolean;
  /** Access token lifetime in seconds */
  accessTokenLifetime: number;
  /** Refresh token lifetime in seconds */
  refreshTokenLifetime: number;
  /** Creation timestamp */
  createdAt: Date;
  /** Last update timestamp */
  updatedAt: Date;
};

export const oAuthAppResponseSchema: Schema<OAuthAppResponse> = s.object<OAuthAppResponse>({
  id: s.string(),
  slug: s.string(),
  clientId: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  redirectUris: s.array(s.string()),
  allowedGrantTypes: s.array(s.string()),
  allowedScopes: s.array(s.string()),
  status: statusSchema,
  homepageUrl: s.optional(s.string()),
  privacyPolicyUrl: s.optional(s.string()),
  termsOfServiceUrl: s.optional(s.string()),
  isConfidential: s.boolean(),
  accessTokenLifetime: s.int(),
  refreshTokenLifetime: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
});
