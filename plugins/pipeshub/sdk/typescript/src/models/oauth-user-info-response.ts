import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OpenID Connect UserInfo Response. Contains claims about the authenticated user. */
export type OAuthUserInfoResponse = {
  /** User ID */
  userId: string;
  /** Full name */
  name?: string;
  /** First name */
  givenName?: string;
  /** Last name */
  familyName?: string;
  /** Email address */
  email?: string;
  /** Whether email has been verified */
  emailVerified?: boolean;
  /** Profile picture URL */
  picture?: string;
  /** Last profile update timestamp (Unix epoch) */
  updatedAt?: number;
};

export const oAuthUserInfoResponseSchema: Schema<OAuthUserInfoResponse> = s.object<OAuthUserInfoResponse>({
  userId: s.string(),
  name: s.optional(s.string()),
  givenName: s.optional(s.string()),
  familyName: s.optional(s.string()),
  email: s.optional(s.string()),
  emailVerified: s.optional(s.boolean()),
  picture: s.optional(s.string()),
  updatedAt: s.optional(s.int()),
  _keysMap: {
    userId: "user_id",
    givenName: "given_name",
    familyName: "family_name",
    emailVerified: "email_verified",
    updatedAt: "updated_at",
  },
});
