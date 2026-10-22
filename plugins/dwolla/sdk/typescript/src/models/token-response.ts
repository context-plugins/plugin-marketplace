import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenResponse = {
  /**
   * A new access token that is used to authenticate against resources that belong to the app
   * itself.
   */
  accessToken: string;
  /** The type of token, always "Bearer" */
  tokenType: string;
  /** The lifetime of the access token, in seconds. Default is 3600. */
  expiresIn: number;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>({
  accessToken: s.string(),
  tokenType: s.string(),
  expiresIn: s.int(),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
  },
});
