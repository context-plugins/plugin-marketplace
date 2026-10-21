import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthClientPost = {
  /** The name of your new LaunchDarkly OAuth 2.0 client. */
  name?: string;
  /**
   * The redirect URI for your new OAuth 2.0 application. This should be an absolute URL conforming
   * with the standard HTTPS protocol.
   */
  redirectUri?: string;
  /** Description of your OAuth 2.0 client. */
  description?: string;
};

export const oauthClientPostSchema: Schema<OauthClientPost> = s.object<OauthClientPost>({
  name: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  description: s.optional(s.string()),
});
