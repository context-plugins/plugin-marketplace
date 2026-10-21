import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Credentials for OAuth authentication (Microsoft, Azure AD, generic OAuth) */
export type OAuthCredentials = {
  /** OAuth access token */
  accessToken: string;
  /** OAuth ID token (JWT) */
  idToken?: string;
};

export const oAuthCredentialsSchema: Schema<OAuthCredentials> = s.object<OAuthCredentials>({
  accessToken: s.string(),
  idToken: s.optional(s.string()),
});
