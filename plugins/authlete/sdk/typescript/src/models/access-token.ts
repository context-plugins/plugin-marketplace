import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { propertySchema, type Property } from "./property.js";

export type AccessToken = {
  /** The hash of the access token. */
  accessTokenHash?: string;
  /** The timestamp at which the access token will expire. */
  accessTokenExpiresAt?: number;
  /** The hash of the refresh token. */
  refreshTokenHash?: string;
  /** The timestamp at which the refresh token will expire. */
  refreshTokenExpiresAt?: number;
  /** The timestamp at which the access token was first created. */
  createdAt?: number;
  /** The timestamp at which the access token was last refreshed using the refresh token. */
  lastRefreshedAt?: number;
  /** The ID of the client associated with the access token. */
  clientId?: number;
  /** The subject (= unique user ID) associated with the access token. */
  subject?: string;
  /** The grant type of the access token when the access token was created. */
  grantType?: GrantType;
  /** The scopes associated with the access token. */
  scopes?: string[];
  /** The properties associated with the access token. */
  properties?: Property[];
  /** The scopes associated with the refresh token. */
  refreshTokenScopes?: string[];
};

export const accessTokenSchema: Schema<AccessToken> = s.object<AccessToken>({
  accessTokenHash: s.optional(s.string()),
  accessTokenExpiresAt: s.optional(s.int()),
  refreshTokenHash: s.optional(s.string()),
  refreshTokenExpiresAt: s.optional(s.int()),
  createdAt: s.optional(s.int()),
  lastRefreshedAt: s.optional(s.int()),
  clientId: s.optional(s.int()),
  subject: s.optional(s.string()),
  grantType: s.optional(s.lazy(() => grantTypeSchema)),
  scopes: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  refreshTokenScopes: s.optional(s.array(s.string())),
});
