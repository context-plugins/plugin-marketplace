import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cookieDomainsSchema, type CookieDomains } from "./unions/cookie-domains.js";
import { lastUsedAtSchema, type LastUsedAt } from "./unions/last-used-at.js";
import { nameSchema, type Name } from "./unions/name.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";

/**
 * View model for representing a profile. A profile lets you preserve the login state between
 * sessions.
 *
 * We recommend that you create a separate profile for each user of your app. You can assign a
 * user_id to each profile to easily identify which user the profile belongs to.
 */
export type ProfileView = {
  /** Unique identifier for the profile */
  id: string;
  /**
   * Your internal user identifier for this profile. Use this to associate a profile with a user in
   * your system.
   */
  userId?: UserId;
  /** Optional name for the profile */
  name?: Name;
  /** Timestamp when the profile was last used */
  lastUsedAt?: LastUsedAt;
  /** Timestamp when the profile was created */
  createdAt: Date;
  /** Timestamp when the profile was last updated */
  updatedAt: Date;
  /** List of domain URLs that have cookies stored for this profile */
  cookieDomains?: CookieDomains;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileViewSchema: Schema<ProfileView> = s.object<ProfileView>(
  {
    id: s.string(),
    userId: s.optional(s.lazy(() => userIdSchema)),
    name: s.optional(s.lazy(() => nameSchema)),
    lastUsedAt: s.optional(s.lazy(() => lastUsedAtSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    cookieDomains: s.optional(s.lazy(() => cookieDomainsSchema)),
  },
  { additionalProperties: s.json() },
);
