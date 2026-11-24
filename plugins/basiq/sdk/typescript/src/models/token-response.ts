import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TokenResponse = {
  /** The generated access token. */
  accessToken: string;
  /** Expires in 3600 seconds */
  expiresIn: number;
  /** This value will always be `Bearer`. */
  tokenType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>(
  {
    accessToken: s.string(),
    expiresIn: s.int(),
    tokenType: s.string(),
    _keysMap: {
      accessToken: "access_token",
      expiresIn: "expires_in",
      tokenType: "token_type",
    },
  },
  { additionalProperties: s.json() },
);
