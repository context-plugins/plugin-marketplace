import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oauthGrantType1Schema, type OauthGrantType1 } from "./oauth-grant-type1.js";

export type Oauth2TokensRequest = {
  /**
   * If you wish to exchange your authorization code for an app access token, use grant type
   * `authorization_code`. If you wish to renew your app access token with your refresh token, use
   * grant type `refresh_token`.
   */
  grantType: OauthGrantType1;
  /**
   * The authorization code you received when creating the authorization. Only use this field when
   * using grant type `authorization_code`.
   */
  code?: string;
  /**
   * The refresh token you received when creating the authorization. Only use this field when using
   * grant type `refresh_token`.
   */
  refreshToken?: string;
  /**
   * The URL the merchant is sent back to once the request has been authorized. It must match the
   * URL you set when registering your app.
   */
  redirectUri?: string;
};

export const oauth2TokensRequestSchema: Schema<Oauth2TokensRequest> = s.object<Oauth2TokensRequest>({
  grantType: oauthGrantType1Schema,
  code: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  _keysMap: {
    grantType: "grant_type",
    refreshToken: "refresh_token",
    redirectUri: "redirect_uri",
  },
});
