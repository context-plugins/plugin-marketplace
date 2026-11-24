import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Access token response from `/oauth/token`. */
export type TokenResponse = {
  accessToken: string;
  /** The token type returned by OAuth2 token endpoints. @default "Bearer" */
  tokenType?: "Bearer";
  expiresIn: number;
  refreshToken?: string;
  scope?: string;
  createdAt: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>(
  {
    accessToken: s.string(),
    tokenType: s.defaulted(s.literal("Bearer"), "Bearer"),
    expiresIn: s.int(),
    refreshToken: s.optional(s.string()),
    scope: s.optional(s.string()),
    createdAt: s.int(),
    _keysMap: {
      accessToken: "access_token",
      tokenType: "token_type",
      expiresIn: "expires_in",
      refreshToken: "refresh_token",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
