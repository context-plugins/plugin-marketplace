import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthToken = {
  accessToken: string;
  datasource: string;
  scope?: string;
  tokenType?: string;
  /**
   * Used by Google to indicate the index of the logged in user. Useful for generating hyperlinks
   * that support multilogin.
   */
  authUser?: string;
  /** Unix timestamp when this token expires (in seconds since epoch UTC). */
  expiration?: number;
};

export const authTokenSchema: Schema<AuthToken> = s.object<AuthToken>({
  accessToken: s.string(),
  datasource: s.string(),
  scope: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  authUser: s.optional(s.string()),
  expiration: s.optional(s.int()),
});
