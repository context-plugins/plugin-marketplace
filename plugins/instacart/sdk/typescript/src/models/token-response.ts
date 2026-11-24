import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";

export type TokenResponse = {
  /** The Bearer token to use for authenticating API requests. */
  accessToken?: string;
  /** The type of token issued. */
  tokenType?: TokenType;
  /** The number of seconds until the token expires. Typically 86400 seconds (24 hours). */
  expiresIn?: number;
  /** The scope of access granted by the token. */
  scope?: string;
  /** Unix timestamp indicating when the token was created. */
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>(
  {
    accessToken: s.optional(s.string()),
    tokenType: s.optional(s.lazy(() => tokenTypeSchema)),
    expiresIn: s.optional(s.int()),
    scope: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      accessToken: "access_token",
      tokenType: "token_type",
      expiresIn: "expires_in",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
