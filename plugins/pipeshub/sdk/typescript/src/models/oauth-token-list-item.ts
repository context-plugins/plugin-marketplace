import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";

/**
 * Information about an issued token (one element returned by `listTokensForApp` in
 * `oauth_token.service.ts`). `userId` is omitted for client-credentials access tokens; all other
 * fields are always populated.
 */
export type OAuthTokenListItem = {
  /** Token ID */
  id: string;
  /** Type of token */
  tokenType: TokenType;
  /** User ID (omitted for client-credentials access tokens) */
  userId?: string;
  /** Granted scopes */
  scopes: string[];
  /** Token creation time */
  createdAt: Date;
  /** Token expiration time */
  expiresAt: Date;
  /** Whether token has been revoked */
  isRevoked: boolean;
};

export const oAuthTokenListItemSchema: Schema<OAuthTokenListItem> = s.object<OAuthTokenListItem>({
  id: s.string(),
  tokenType: tokenTypeSchema,
  userId: s.optional(s.string()),
  scopes: s.array(s.string()),
  createdAt: s.dateTime(),
  expiresAt: s.dateTime(),
  isRevoked: s.boolean(),
});
