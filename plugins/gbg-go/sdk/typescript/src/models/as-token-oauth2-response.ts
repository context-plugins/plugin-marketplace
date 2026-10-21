import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AsTokenOauth2Response = {
  /** The access token used for authentication. */
  accessToken?: string;
  /** Token expiration time in seconds. */
  expiresIn?: number;
  /** The type of token, usually 'Bearer'. */
  tokenType?: string;
};

export const asTokenOauth2ResponseSchema: Schema<AsTokenOauth2Response> = s.object<AsTokenOauth2Response>({
  accessToken: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  tokenType: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    expiresIn: "expires_in",
    tokenType: "token_type",
  },
});
