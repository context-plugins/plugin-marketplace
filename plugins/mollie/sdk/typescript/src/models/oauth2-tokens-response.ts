import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Oauth2TokensResponse = {
  /**
   * The app access token, with which you will be able to access the Mollie API on the merchant's
   * behalf.
   */
  accessToken?: string;
  /**
   * The refresh token, with which you will be able to retrieve new app access tokens on this
   * endpoint. The refresh token does not expire.
   */
  refreshToken?: string;
  /**
   * The number of seconds left before the app access token expires. Be sure to renew your app
   * access token before this reaches zero.
   */
  expiresIn?: number;
  /**
   * As per OAuth standards, the provided app access token can only be used with `bearer`
   * authentication.
   *
   * Possible values: `bearer`
   */
  tokenType?: string;
  /** A space-separated list of [permissions](https://docs.mollie.com/docs/permissions). */
  scope?: string;
};

export const oauth2TokensResponseSchema: Schema<Oauth2TokensResponse> = s.object<Oauth2TokensResponse>({
  accessToken: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  tokenType: s.optional(s.string()),
  scope: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    refreshToken: "refresh_token",
    expiresIn: "expires_in",
    tokenType: "token_type",
  },
});
