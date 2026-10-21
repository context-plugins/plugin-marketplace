import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If you wish to exchange your authorization code for an app access token, use grant type
 * `authorization_code`. If you wish to renew your app access token with your refresh token, use
 * grant type `refresh_token`.
 */
export const OauthGrantType1 = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type OauthGrantType1 = (typeof OauthGrantType1)[keyof typeof OauthGrantType1] | (string & {});

export const oauthGrantType1Schema: EnumSchema<OauthGrantType1> = s.enumOf<OauthGrantType1>(OauthGrantType1);
